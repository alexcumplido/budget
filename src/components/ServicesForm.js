import React, {useState, useEffect} from 'react';
import { Form } from './Style.js';
import { Checkbox } from './Checkbox.js';
import { Panel } from './Style.js'
import { InputWithButton } from './InputWithButton.js';

export function ServicesForm() {
  let [total, setTotal] = useState(0);

  //Checkbox
  const [maquetar, setMaquetar] = useState(false);
  const [seo, setSeo] = useState(false);
  const [googleAdds, setGoogleAdds] = useState(false);

  //Inputs text 
  let [paginas, setPaginas] = useState(0);
  let [idiomas, setIdiomas] = useState(0);

  let [btnLocalStorage, setBtnLocalStorage] = useState(false);
  const onClickLocalStorage = () => setBtnLocalStorage(!btnLocalStorage);
 
  //Checkbox handlers
  function onChangeChecks (evt) {
    if(evt.target.id ==='maquetar') setMaquetar(!maquetar);
    if(evt.target.id ==='seo') setSeo(!seo);
    if(evt.target.id ==='googleAdds') setGoogleAdds(!googleAdds);
  }

  //Inputs text handlers
  const handlePaginas = (evt) => setPaginas(parseInt(evt.target.value));
  const handleIdiomas = (evt) => setIdiomas(parseInt(evt.target.value));

  //Total summation from checkbox
  function totalChecks(evt){
    let id = evt.target.id;
    let check = evt.target.checked;
    if(id === 'maquetar' && check) setTotal(total+400);
    if(id === 'maquetar' && !check) setTotal(total-400);
    if(id === 'seo' && check ) setTotal(total+300);
    if(id === 'seo' && !check)  setTotal(total-300);
    if(id === 'googleAdds' && check) setTotal(total+200);
    if(id === 'googleAdds' && !check) setTotal(total-200);
  }

  //Maquetar subinputs bottons 
  const sumarPaginas = () => setPaginas(++paginas)  
  const restarPaginas = () => (!paginas) ? setPaginas(paginas) : setPaginas(--paginas); 
  const sumarIdiomas = () => setIdiomas(++idiomas);
  const restarIdiomas = () => (!idiomas) ? setIdiomas(idiomas) : setIdiomas(--idiomas);


//clean state paginas e idiomas 
  useEffect(()=> {
    if(maquetar && !localStorage.getItem(('form'))) {
      setPaginas(1);
      setIdiomas(1);
    } else if (!maquetar ) {
      setPaginas(0);
      setIdiomas(0);
    }
  },[maquetar]);

  //Total summation fom inputs and checkbox
  useEffect(() => {
    total = 0;
    let totalMaquetar = (paginas*idiomas)*30;
    if(maquetar) total += 400;
    if(seo) total += 300;
    if(googleAdds) total += 200;
    setTotal(total+totalMaquetar);
  }, [paginas, idiomas]);

  //local Storage operations
  useEffect(()=>{
    if(btnLocalStorage) {
      let formToStorage = {
        maquetar: maquetar,
        seo: seo,
        googleAdds: googleAdds,
        idiomas: idiomas,
        paginas: paginas,
        total: total,
      }
      localStorage.setItem('form', JSON.stringify(formToStorage));
    }
  }, [btnLocalStorage])

  useEffect(()=>{
    if (localStorage.getItem(('form'))) {
      let formFromStorage = JSON.parse(localStorage.getItem(('form')));
      setMaquetar(formFromStorage.maquetar);
      setSeo(formFromStorage.seo);
      setGoogleAdds(formFromStorage.googleAdds);
      setPaginas(formFromStorage.paginas);
      setIdiomas(formFromStorage.idiomas);
      setTotal(formFromStorage.total);
    }
  },[]);

  return (
    <Form>
      <h3>Services </h3>
      <Checkbox label='Maquetar (400€)' id='maquetar' check={maquetar} onChange={onChangeChecks} onClick={totalChecks}/>

      {maquetar && 
      <Panel>
        <InputWithButton id='paginas' value={paginas} onClickSuma={sumarPaginas} onClickResta={restarPaginas} onChange={handlePaginas}/>
        <InputWithButton id='idiomas' value={idiomas} onClickSuma={sumarIdiomas} onClickResta={restarIdiomas} onChange={handleIdiomas}/>
      </Panel>}

      <Checkbox label='Seo Analysis (300€)' id='seo' check={seo} onChange={onChangeChecks} onClick={totalChecks}/> 
      <Checkbox label='GoogleAdds action (200€)' id='googleAdds' check={googleAdds} onChange={onChangeChecks} onClick={totalChecks}/>
      <p>Total price is {total}</p>
      <button onClick={onClickLocalStorage}>Save Form</button>
    </Form>
  );
};