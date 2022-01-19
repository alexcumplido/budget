import React, { useState, useEffect } from 'react';

import { Checkbox } from './Checkbox.js';

import { InputWithButton } from './InputWithButton.js';
import { InputCustomer } from './InputCustomer.js'
import { BudgetList } from '../Budget/BudgetList.js';

import { Form } from '../Style.js';
import { Panel } from '../Style.js'
import { Wrapper } from '../Style.js';

export function ServicesForm() {
  const [checkState, setCheckState] = useState({
    web: false,
    seo: false,
    googleAdds: false,
  });

  let {web, seo, googleAdds} = checkState;
  
  const [inputsWeb, setInputsWeb] = useState({
    paginas: 0,
    idiomas: 0,
  });

  let {paginas, idiomas} = inputsWeb;

  const [inputsCustomer, setInputsCustomer] = useState({
    nameUser: '',
    nameBudget: '',
  });

  let {nameUser, nameBudget} = inputsCustomer;
  
  let [total, setTotal] = useState(0);

  const [budgetSaved, setBudgetSaved] = useState([]);

  
  function onChangeChecks (event) {
    setCheckState({ 
      ...checkState,
      [event.target.id]: event.target.checked,
    })
  }

  function onChangeInputsText(event) {
    setInputsWeb({
      ...inputsWeb,
      [event.target.id]: parseInt(event.target.value),
    })
  }

   function onChangeInputCustomer (event) {
    setInputsCustomer({ 
      ...inputsCustomer,
      [event.target.id]: event.target.value,
    })
  }

  function sumarPaginas() {
    setInputsWeb({
      ...inputsWeb, 
      paginas: ++paginas
    });  
  } 

  function restarPaginas() {
    if(paginas>1) setInputsWeb({
      ...inputsWeb,
      paginas: --paginas})
  }

  function sumarIdiomas() {
    setInputsWeb({
      ...inputsWeb, 
      idiomas: ++idiomas}); 
  }

  function restarIdiomas() {
    if(idiomas>1) setInputsWeb({
      ...inputsWeb, 
      idiomas: --idiomas
    })
  }

  //Total calculation
  useEffect(() => {
      setTotal(total=0);
      if(web) setTotal(total+=500);
      if(seo) setTotal(total+=300);
      if(googleAdds) setTotal(total+=200);
      setTotal(total+((paginas*idiomas)*30));
  },[checkState, paginas, idiomas]);

  //Input texts clean up
  useEffect(()=> {
    if(web && !localStorage.getItem(('form'))) {
      setInputsWeb({ 
        paginas: 1, 
        idiomas: 1
      })
    } 
    else if (!web ) {
      setInputsWeb({ 
        paginas: 0, 
        idiomas: 0
      })
    }
  },[web]);

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


  useEffect(()=>{
    if (localStorage.getItem(('form'))) {
      let formStorage = JSON.parse(localStorage.getItem(('form')));
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

  useEffect(()=>{
      window.localStorage.setItem('form', JSON.stringify({
        ...checkState,
        ...inputsWeb,
        ...inputsCustomer,
        total: total,
      }));
  })
 
  return (
   
    <Wrapper>
      <Form>
        <h3>Services </h3>
        <Checkbox 
          label='Crear Web (500€)' 
          id='web' 
          check={web} 
          onChange={onChangeChecks} 
        />
        {web && <Panel>
          <InputWithButton 
            id='paginas' 
            value={paginas} 
            onClickSuma={sumarPaginas} 
            onClickResta={restarPaginas} 
            onChange={onChangeInputsText}/>
          <InputWithButton  
            id='idiomas' 
            value={idiomas} 
            onClickSuma={sumarIdiomas} 
            onClickResta={restarIdiomas} 
            onChange={onChangeInputsText}
          />
        </Panel>}
        
        <Checkbox 
          label='Seo Analysis (300€)' 
          id='seo' 
          check={seo} 
          onChange={onChangeChecks} 
        /> 
        <Checkbox 
          label='GoogleAdds action (200€)' 
          id='googleAdds' 
          check={googleAdds} 
          onChange={onChangeChecks} 
        />

        <InputCustomer
            label='Nombre cliente'
            id='nameUser' 
            value={nameUser} 
            onChange={onChangeInputCustomer}
        />

       <InputCustomer
            label='Título presupuesto'
            id='nameBudget' 
            value={nameBudget} 
            onChange={onChangeInputCustomer}
        />

        <p>Total price is {total}</p>
        <button onClick={onClickSaveBudget}>Save Budget</button>
      </Form>
      <BudgetList data={budgetSaved} />
     </Wrapper>
  );
};

