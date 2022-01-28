import React, { useState, useEffect } from 'react';
import  { useSearchParams, Link } from 'react-router-dom';
import { Checkbox } from './components/Checkbox.js';
import { InputPanel } from './components/InputPanel.js';
import { Input } from './components/Input.js'
import { Dashboard, Form, Panel, ButtonSaveBudget } from './components/Style.js';
import { InputSearch } from './components/InputSearch.js';
import { ListItems } from './components/ListItems.js'
import { WrapperBudget, GroupBtnBudget, BtnBudget,} from './components/Style.js' 

export function App() {

  //States.......................................................................
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [checkState, setCheckState] = useState({
    web: false,
    seo: false,
    googleAdds: false,
  });
  
  const [inputsWeb, setInputsWeb] = useState({
    paginas: 0,
    idiomas: 0,
  });
  
  const [inputsCustomer, setInputsCustomer] = useState({
    nameUser: '',
    nameBudget: '',
  });

  let [total, setTotal] = useState(0);

  let [modal, setModal] = useState(false);

  let [budget, setBudget] = useState([]);

  let [budgetList, setBudgetList] = useState([]);

  let [search, setSearch] = useState('');

  //State handlers.................................................................
  const onChangeChecks = (event) => {
    setCheckState({ 
      ...checkState,
      [event.target.id]: event.target.checked,
    });
  }

  const onChangeInputsWeb = (event) => {
    let value = parseInt(event.target.value);
    setInputsWeb({
      ...inputsWeb,
      [event.target.id]: (value<1) ? 1 : value,
    });
  }

  const onChangeInputCustomer = (event) => {
    setInputsCustomer({ 
      ...inputsCustomer,
      [event.target.id]: event.target.value,
    });
  }

  const addPage = ()=>  {
    setInputsWeb({
      ...inputsWeb, 
      paginas: ++inputsWeb.paginas,
    });  
  } 

  const addLanguage = ()=> {
    setInputsWeb({
      ...inputsWeb, 
      idiomas: ++inputsWeb.idiomas,
    }); 
  }

  const subtractPage = ()=> {
    if(inputsWeb.paginas>1) setInputsWeb({
      ...inputsWeb,
      paginas: --inputsWeb.paginas,
    });
  }

  const subtractLanguage = ()=> {
    if(inputsWeb.idiomas>1) setInputsWeb({
      ...inputsWeb, 
      idiomas: --inputsWeb.idiomas,
    });
  }

  const handleModal = ()=> setModal(!modal)

  const setStateSearch = (event) => setSearch(event.target.value);

  const resetBudget = () => setBudgetList([...budget]);

  //Budget filters.....................................................................
  const filterUserName = ()=> {
    let filterName = [...budget].sort((a, b) => a.nameUser < b.nameUser ? -1 : 1);
    setBudgetList(filterName);
  }

  const filterDate = ()=> {
    let filterDate = [...budget].sort((a, b) => a.date < b.date ? 1 : -1);
    setBudgetList(filterDate);
  }

  const filterBudgetName = () => {
    let filterSearch = [...budget].filter((element)=> element.nameBudget === search);
    setBudgetList(filterSearch);
  }

 const deleteList = ()=> {
    setBudget([]);
    setBudgetList([]);
  }

  //cleanUpInputs................................................................
  useEffect(()=> {
    if (!checkState.web) {
      setInputsWeb({ 
        paginas: 0, 
        idiomas: 0
      });
    } 
  },[checkState.web]);

  //calculations................................................................
  useEffect(() => {
    setTotal(total=0);
    if(checkState.web) setTotal(total+=500);
    if(checkState.seo) setTotal(total+=300);
    if(checkState.googleAdds) setTotal(total+=200);
    setTotal(total+((inputsWeb.paginas*inputsWeb.idiomas)*30));
  },[checkState, inputsWeb]);

//Set array budgets into budgetState............................................
  function addBudget () {
      setBudget([
        ...budget,
      {
        ...checkState,
        ...inputsWeb,
        ...inputsCustomer,
        total: total,
        date: new Date(),
      }
    ]);
  }

  //get localStorage || SearchParams............................................
  useEffect(() => {
    let locationSearch = window.location.search;
    let formStorage = JSON.parse(localStorage.getItem(('form')));

    if(locationSearch) {
      let state = {};
      searchParams.forEach((value, key)=> {
        if (value === 'true') value = true;
        if (value === 'false') value = false;
        state[key] = value;
      });
  
      setCheckState({
        web: state.web, 
        seo: state.seo, 
        googleAdds: state.googleAdds
      });
      setInputsWeb({
        paginas: state.paginas, 
        idiomas: state.idiomas
      });
      setInputsCustomer({
        nameUser: state.nameUser, 
        nameBudget: state.nameBudget
      });
      setTotal(total = state.total);
    } 
    if(!locationSearch && formStorage) {

      setCheckState({
        web: formStorage.web,
        seo: formStorage.seo,
        googleAdds: formStorage.googleAdds,
      })
      setInputsWeb({
        paginas: formStorage.paginas,
        idiomas: formStorage.idiomas,
      })
      setInputsCustomer({
        nameUser: formStorage.nameUser,
        nameBudget: formStorage.nameBudget,
      })
      setTotal(formStorage.total);
    }
  }, []);

  //urlParams always updated with form values...................................
  useEffect(() => {
    const state = [
      {id:'web', state:checkState.web}, 
      {id:'seo', state:checkState.seo}, 
      {id:'googleAdds', state:checkState.googleAdds}, 
      {id:'paginas', state:inputsWeb.paginas},
      {id:'idiomas', state:inputsWeb.idiomas}, 
      {id:'nameUser', state:inputsCustomer.nameUser}, 
      {id:'nameBudget', state:inputsCustomer.nameBudget},
      {id:'total', state: total}
    ]

    const query = new URLSearchParams();
    state.forEach( item => query.append(item.id, item.state));
    setSearchParams(query);
    
  },[checkState, inputsWeb, inputsCustomer, total]);

  //localSotrage remembers last preferences.....................................
  useEffect(()=>{
    window.localStorage.setItem('form', JSON.stringify({
      ...checkState,
      ...inputsWeb,
      ...inputsCustomer,
      total: total,
    }));
  });

  //Get from localStorage arrayBudgets stored...................................
  useEffect(()=>{
    if (localStorage.getItem(('budgetStorage'))) {
      setBudget(JSON.parse(localStorage.getItem(('budgetStorage'))));
    }
  }, []);

  //Every time budget state changes send it to localStorage.....................
  useEffect(()=>{
    window.localStorage.setItem('budgetStorage', JSON.stringify(budget));
  }, [budget]);

  useEffect(()=>{
    setBudgetList([...budget]);
  }, [budget])

  useEffect(()=>{
    let searchExist = [...budget].find((element)=> element.nameBudget === search);
    (searchExist) ? filterBudgetName () : resetBudget();
  },[search]);

  return (
    <>
      <Link to="/"> Home </Link>
      <Dashboard>
        <Form>
          <h3>Services</h3>
          <Checkbox 
            label='Crear Web (500€)' 
            id='web' 
            check={checkState.web} 
            onChange={onChangeChecks} 
          />
          {checkState.web && 
          <Panel>
            <InputPanel 
              id='paginas' 
              value={inputsWeb.paginas}
              addInput={addPage}
              subtractInput={subtractPage}
              onChange={onChangeInputsWeb}
              modal={modal}
              handleModal={handleModal}
            />
            <InputPanel  
              id='idiomas' 
              value={inputsWeb.idiomas}
              addInput={addLanguage}
              subtractInput={subtractLanguage}
              onChange={onChangeInputsWeb}
              modal={modal}
              handleModal={handleModal}
            />
          </Panel>}
          
          <Checkbox 
            label='Seo Analysis (300€)' 
            id={'seo'}
            check={checkState.seo} 
            onChange={onChangeChecks} 
          /> 
          <Checkbox 
            label='GoogleAdds action (200€)' 
            id='googleAdds' 
            check={checkState.googleAdds} 
            onChange={onChangeChecks} 
          />

          <Input
            label='User name'
            id='nameUser' 
            value={inputsCustomer.nameUser} 
            onChange={onChangeInputCustomer}
          />
          <Input
            label='Budget name'
            id='nameBudget' 
            value={inputsCustomer.nameBudget} 
            onChange={onChangeInputCustomer}
          />

          <p>Total price is <strong>{total}</strong>€</p>
          <ButtonSaveBudget onClick={addBudget}>Add budget</ButtonSaveBudget>
        </Form>
        <WrapperBudget>
          <GroupBtnBudget>
            <BtnBudget onClick={resetBudget}>Reset</BtnBudget>
            <BtnBudget onClick={filterUserName}>Filter A-Z</BtnBudget>
            <BtnBudget onClick={filterDate}>Filter date</BtnBudget>
            <BtnBudget onClick={deleteList}>Delete list</BtnBudget>
          </GroupBtnBudget>
            <InputSearch id='search' label={'Search budgetName'} name='search' value={search} onChange={setStateSearch}/>
            <ListItems data={budgetList}/>
        </WrapperBudget>
      </Dashboard>
    </>
  );
};
