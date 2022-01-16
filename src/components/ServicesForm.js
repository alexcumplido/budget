import React, { useState, useEffect } from 'react';
import { Form } from './Style.js';
import { Checkbox } from './Checkbox.js';
import { Panel } from './Style.js'
import { InputWithButton } from './InputWithButton.js';

export function ServicesForm() {

  let [total, setTotal] = useState(0);

  const [checkState, setCheckState] = useState({
    maquetar: false,
    seo: false,
    googleAdds: false,
  });

  function onChangeChecks (event) {
    setCheckState({ 
      ...checkState,
      [event.target.id]: event.target.checked,
    })
  }

  const [inputsMaquetar, setInputsMaquetar] = useState({
    paginas: 0,
    idiomas: 0,
  })

  //Inputs text handlers
  function handleInputsMaquetar(event) {
    setInputsMaquetar({
      ...inputsMaquetar,
      [event.target.id]: parseInt(event.target.value),
    })
  }

  const sumarPaginas = () => setInputsMaquetar({
    paginas: ++inputsMaquetar.paginas, idiomas: inputsMaquetar.idiomas,
  });  

  const restarPaginas = () => {
    if(inputsMaquetar.paginas>1) {
      setInputsMaquetar({ paginas: --inputsMaquetar.paginas, idiomas: inputsMaquetar.idiomas})
    }
  }

  const sumarIdiomas = () => setInputsMaquetar({
    paginas: inputsMaquetar.paginas, idiomas: ++inputsMaquetar.idiomas,
  }); 

  const restarIdiomas = () => {
    if(inputsMaquetar.idiomas>1) {
      setInputsMaquetar({ paginas: inputsMaquetar.paginas, idiomas: --inputsMaquetar.idiomas})
    }
  }

  useEffect(()=> {
    if(checkState.maquetar && !localStorage.getItem(('form'))) {
      setInputsMaquetar({ 
        paginas: 1, 
        idiomas: 1
      })
    } 
    else if (!checkState.maquetar ) {
      setInputsMaquetar({ 
        paginas: 0, 
        idiomas: 0
      })
    }
  },[checkState.maquetar]);

  useEffect(() => {
      setTotal(total=0);
      let totalMaquetar = (inputsMaquetar.paginas*inputsMaquetar.idiomas)*30;
      if(checkState.maquetar) setTotal(total+=400);
      if(checkState.seo) setTotal(total+=300);
      if(checkState.googleAdds) setTotal(total+=200);
      setTotal(total+totalMaquetar);
  }, [checkState, inputsMaquetar.paginas, inputsMaquetar.idiomas]);

  let [btnLocalStorage, setBtnLocalStorage] = useState(false);
  const onClickLocalStorage = () => setBtnLocalStorage(!btnLocalStorage);
  
  useEffect(()=>{
    if(btnLocalStorage) {
      let formToStorage = {
        maquetar: checkState.maquetar,
        seo: checkState.seo,
        googleAdds: checkState.googleAdds,
        idiomas: inputsMaquetar.idiomas,
        paginas: inputsMaquetar.paginas,
        total: total,
      }
      localStorage.setItem('form', JSON.stringify(formToStorage));
    }
  }, [btnLocalStorage])

  useEffect(()=>{
    if (localStorage.getItem(('form'))) {
      let formFromStorage = JSON.parse(localStorage.getItem(('form')));
      setCheckState({
        maquetar: formFromStorage.maquetar,
        seo: formFromStorage.seo,
        googleAdds: formFromStorage.googleAdds,
      })
      setInputsMaquetar({
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
          label='Maquetar (400€)' 
          id='maquetar' 
          check={checkState.maquetar} 
          onChange={onChangeChecks} 
        />
        {checkState.maquetar && <Panel>
          <InputWithButton 
            id='paginas' 
            value={inputsMaquetar.paginas} 
            onClickSuma={sumarPaginas} 
            onClickResta={restarPaginas} 
            onChange={handleInputsMaquetar}/>
          <InputWithButton 
            id='idiomas' 
            value={inputsMaquetar.idiomas} 
            onClickSuma={sumarIdiomas} 
            onClickResta={restarIdiomas} 
            onChange={handleInputsMaquetar}
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

  // //Checkbox
  // const [maquetar, setMaquetar] = useState(false);
  // const [seo, setSeo] = useState(false);
  // const [googleAdds, setGoogleAdds] = useState(false);
 
  // //Checkbox handlers
  // function onChangeChecks (e) {
  //   if(e.target.id ==='maquetar') setMaquetar(!maquetar);
  //   if(e.target.id ==='seo') setSeo(!seo);
  //   if(e.target.id ==='googleAdds') setGoogleAdds(!googleAdds);
  // }

  // //Total summation from checkbox
  // function totalChecks(e){
  //   let id = e.target.id;
  //   let check = e.target.checked;
  //   if(id === 'maquetar' && check) setTotal(total+400);
  //   if(id === 'maquetar' && !check) setTotal(total-400);
  //   if(id === 'seo' && check ) setTotal(total+300);
  //   if(id === 'seo' && !check)  setTotal(total-300);
  //   if(id === 'googleAdds' && check) setTotal(total+200);
  //   if(id === 'googleAdds' && !check) setTotal(total-200);
  // }

  // useEffect(()=>{
  //   total = 0;
  //   if (checkState.maquetar) setTotal(total+=400);
  //   if (checkState.seo) setTotal(total+=300);
  //   if (checkState.googleAdds) setTotal(total+=200);
  // }, [checkState] )

  // //Inputs text   
  // let [paginas, setPaginas] = useState(0);
  // let [idiomas, setIdiomas] = useState(0);

  // const handlePaginas = (e) => setPaginas(parseInt(e.target.value));
  // const handleIdiomas = (e) => setIdiomas(parseInt(e.target.value));

  // //Maquetar subinputs bottons 
  // const sumarPaginas = () => setPaginas(++paginas)  
  // const restarPaginas = () => (!paginas) ? setPaginas(paginas) : setPaginas(--paginas); 
  // const sumarIdiomas = () => setIdiomas(++idiomas);
  // const restarIdiomas = () => (!idiomas) ? setIdiomas(idiomas) : setIdiomas(--idiomas);