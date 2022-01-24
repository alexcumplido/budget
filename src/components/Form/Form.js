import React, { useState, useEffect } from 'react';
import  { Link, useSearchParams } from 'react-router-dom';

import { Checkbox } from './Checkbox.js';
import { InputWithButton } from './InputWithButton.js';
import { Input } from '../Input.js'

import { BudgetList } from '../Budget/BudgetList.js';
  
import { FormWrapper } from '../Style.js';
import { Panel } from '../Style.js'
import { DashboardWrapper } from '../Style.js';

export function Form() {

  //States.......................................................................
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
  const handleModal = ()=> setModal(!modal)

  const [searchParams, setSearchParams] = useSearchParams();

  let [budgetSaved, setBudgetSaved] = useState([]);
  //States.......................................................................

  //setStates....................................................................
  const onChangeChecks = (event) => {
    setCheckState({ 
      ...checkState,
      [event.target.id]: event.target.checked,
    })
  }

  const onChangeInputsWeb = (event) => {
    let value = parseInt(event.target.value);
    setInputsWeb({
      ...inputsWeb,
      [event.target.id]: [(value<1) ? 1 : value]
    })
  }

  const onChangeInputCustomer = (event) => {
    setInputsCustomer({ 
      ...inputsCustomer,
      [event.target.id]: event.target.value,
    })
  }

  const addPage = ()=>  {
    setInputsWeb({
      ...inputsWeb, 
      paginas: ++inputsWeb.paginas
    });  
  } 

  const addLanguage = ()=> {
    setInputsWeb({
      ...inputsWeb, 
      idiomas: ++inputsWeb.idiomas}); 
  }

  const subtractPage = ()=> {
    if(inputsWeb.paginas>1) setInputsWeb({
      ...inputsWeb,
      paginas: --inputsWeb.paginas})
  }

  const subtractLanguage = ()=> {
    if(inputsWeb.idiomas>1) setInputsWeb({
      ...inputsWeb, 
      idiomas: --inputsWeb.idiomas
    })
  }
  //setStates....................................................................
  
  //cleanUpInputs................................................................
  useEffect(()=> {
    if(checkState.web && !searchParams) {
      setInputsWeb({ 
        paginas: 1, 
        idiomas: 1
      })
    } else if (!checkState.web) {
      setInputsWeb({ 
        paginas: 0, 
        idiomas: 0
      })
    }
  },[checkState.web]);
  //cleanUpInputs................................................................

  //calculations................................................................
  useEffect(() => {
    setTotal(total=0);
    if(checkState.web) setTotal(total+=500);
    if(checkState.seo) setTotal(total+=300);
    if(checkState.googleAdds) setTotal(total+=200);
    setTotal(total+((inputsWeb.paginas*inputsWeb.idiomas)*30));
  },[checkState, inputsWeb]);
  //calculations................................................................


  //localStorage and URL Manipulation...........................................
  function onClickSaveBudget () {
      setBudgetSaved([
        ...budgetSaved,
      {
        ...checkState,
        ...inputsWeb,
        ...inputsCustomer,
        total: total,
        date: new Date(),
      }
    ])
  }

  //searchParams === true get URL , localStorage ===true get localStorage
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


  // BUDGET IS SEND TO BUDGETLIST COMPONENT VIA LOCAL STORAGE
  useEffect(()=>{
    if (localStorage.getItem(('budgetSaved'))) {
      let budgetSavedFromStorage = JSON.parse(localStorage.getItem(('budgetSaved')));
      setBudgetSaved(budgetSavedFromStorage);
    }
  }, []);

  useEffect(()=>{
    if(budgetSaved) {
      window.localStorage.setItem('budgetSaved', JSON.stringify(budgetSaved));
    }
  });

  //localSotrage remembers last preferences.....................................
  useEffect(()=>{
    window.localStorage.setItem('form', JSON.stringify({
      ...checkState,
      ...inputsWeb,
      ...inputsCustomer,
      total: total,
    }));
  })
  //localSotrage remembers last preferences.....................................

  return (
    <>
    <Link to="/"> Home </Link>
    <DashboardWrapper>
      <FormWrapper>
        <h3>Services</h3>
        <Checkbox 
          label='Crear Web (500€)' 
          id='web' 
          check={checkState.web} 
          onChange={onChangeChecks} 
        />
        {checkState.web && 
        <Panel>
          <InputWithButton 
            id='paginas' 
            value={inputsWeb.paginas}
            addInput={addPage}
            subtractInput={subtractPage}
            onChange={onChangeInputsWeb}
            modal={modal}
            handleModal={handleModal}
            />
          <InputWithButton  
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
          label='Nombre cliente'
          id='nameUser' 
          value={inputsCustomer.nameUser} 
          onChange={onChangeInputCustomer}
        />

       <Input
          label='Título presupuesto'
          id='nameBudget' 
          value={inputsCustomer.nameBudget} 
          onChange={onChangeInputCustomer}
        />

        <p>Total price is {total}</p>
        <button onClick={onClickSaveBudget}>Save Budget</button>
      </FormWrapper>
      <BudgetList data={budgetSaved} />
     </DashboardWrapper>
     </>
  );
};


