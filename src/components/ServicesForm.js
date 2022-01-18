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

  let {web, seo, googleAdds} = checkState;
  
  const [inputsWeb, setInputsWeb] = useState({
    paginas: 0,
    idiomas: 0,
  })

  let {paginas, idiomas} = inputsWeb;

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
  function onChangeInputsText(event) {
    setInputsWeb({
      ...inputsWeb,
      [event.target.id]: parseInt(event.target.value),
    })
  }

  // webInputs Panel buttons handlers
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
  
  const onClickLocalStorage = () => setBtnLocalStorage(!btnLocalStorage);

  //Total calculation
  useEffect(() => {
      setTotal(total=0);
      if(web) setTotal(total+=400);
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

  //Local Storage operations
  useEffect(()=>{
    if(btnLocalStorage) {
      window.localStorage.setItem('form', JSON.stringify({
        ...checkState,
        ...inputsWeb,
        total: total,
      }));
    }
    setBtnLocalStorage(false);
  }, [btnLocalStorage])

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
      setTotal(formStorage.total);
    }
  }, []);

  return (
      <Form>
        <h3>Services </h3>
        <Checkbox 
          label='Crear Web (400€)' 
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

        <p>Total price is {total}</p>
        <button onClick={onClickLocalStorage}>Save Form</button>
      </Form>
  );
};

