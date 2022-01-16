import React, { useState, useEffect } from 'react';
import { Form } from './Style.js';
import { Checkbox } from './Checkbox.js';
import { Panel } from './Style.js'
import { InputWithButton } from './InputWithButton.js';

export function ServicesForm() {

  const [checkState, setCheckState] = useState({
    web: false,
    seo: false,
    googleAdds: false,
  });
  
  const [inputsWeb, setInputsWeb] = useState({
    paginas: 0,
    idiomas: 0,
  })

  let [total, setTotal] = useState(0);
  let [btnLocalStorage, setBtnLocalStorage] = useState(false);

 
  // Input Checkbox handlers
  function onChangeChecks (event) {
    setCheckState({ 
      ...checkState,
      [event.target.id]: event.target.checked,
    })
  }

  // Input Text handlers
  function handleInputsWeb(event) {
    setInputsWeb({
      ...inputsWeb,
      [event.target.id]: parseInt(event.target.value),
    })
  }

  // Inputs buttons handlers
  const sumarPaginas = () => setInputsWeb({...inputsWeb, paginas: ++inputsWeb.paginas,});  

  const restarPaginas = () => {
    if(inputsWeb.paginas>1) {
      setInputsWeb({ ...inputsWeb, paginas: --inputsWeb.paginas})}
  }

  const sumarIdiomas = () => setInputsWeb({ ...inputsWeb,idiomas: ++inputsWeb.idiomas,}); 

  const restarIdiomas = () => {
    if(inputsWeb.idiomas>1) {
      setInputsWeb({ ...inputsWeb, idiomas: --inputsWeb.idiomas})
    }
  }

  const onClickLocalStorage = () => setBtnLocalStorage(!btnLocalStorage);

  //Total calculation
  useEffect(() => {
      setTotal(total=0);
      let totalWeb = (inputsWeb.paginas*inputsWeb.idiomas)*30;
      if(checkState.web) setTotal(total+=400);
      if(checkState.seo) setTotal(total+=300);
      if(checkState.googleAdds) setTotal(total+=200);
      setTotal(total+totalWeb);
  }, [checkState, inputsWeb.paginas, inputsWeb.idiomas]);

  //Input texts clean up
  useEffect(()=> {
    if(checkState.web && !localStorage.getItem(('form'))) {
      setInputsWeb({ 
        paginas: 1, 
        idiomas: 1
      })
    } 
    else if (!checkState.web ) {
      setInputsWeb({ 
        paginas: 0, 
        idiomas: 0
      })
    }
  },[checkState.web]);

  //Local Storage operations
  useEffect(()=>{
    if(btnLocalStorage) {
      let formToStorage = {
        ...checkState,
        ...inputsWeb,
        total: total,
      }
      localStorage.setItem('form', JSON.stringify(formToStorage));
    }
  }, [btnLocalStorage])

  useEffect(()=>{
    if (localStorage.getItem(('form'))) {
      let formFromStorage = JSON.parse(localStorage.getItem(('form')));
      setCheckState({
        web: formFromStorage.web,
        seo: formFromStorage.seo,
        googleAdds: formFromStorage.googleAdds,
      })
      setInputsWeb({
        paginas: formFromStorage.paginas,
        idiomas: formFromStorage.idiomas,
      })
      setTotal(formFromStorage.total);
    }
  },[]);

  return (
      <Form>
        <h3>Services </h3>
        <Checkbox 
          label='Crear Web (400€)' 
          id='web' 
          check={checkState.web} 
          onChange={onChangeChecks} 
        />
        {checkState.web && <Panel>
          <InputWithButton 
            id='paginas' 
            value={inputsWeb.paginas} 
            onClickSuma={sumarPaginas} 
            onClickResta={restarPaginas} 
            onChange={handleInputsWeb}/>
          <InputWithButton 
            id='idiomas' 
            value={inputsWeb.idiomas} 
            onClickSuma={sumarIdiomas} 
            onClickResta={restarIdiomas} 
            onChange={handleInputsWeb}
          />
        </Panel>}

        <Checkbox 
          label='Seo Analysis (300€)' 
          id='seo' 
          check={checkState.seo} 
          onChange={onChangeChecks} 
        /> 
        <Checkbox 
          label='GoogleAdds action (200€)' 
          id='googleAdds' 
          check={checkState.googleAdds} 
          onChange={onChangeChecks} 
        />

        <p>Total price is {total}</p>
        <button onClick={onClickLocalStorage}>Save Form</button>
      </Form>
  );
};

