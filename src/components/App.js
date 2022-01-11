import React, {useState, useEffect} from 'react';
import { Checkbox } from './Checkbox.js';
import { Input} from './Input.js';
import {Form} from './Style.js';
import {Panel} from './Style.js'
import {InputBotones} from './Style.js'

export function App() {
  //checkbox useState and handlers
  const [maquetar, setMaquetar] = useState(false);
  const [seo, setSeo] = useState(false);
  const [googleAdds, setGoogleAdds] = useState(false);

  //Inputs useState and handlers
  let [paginas, setPaginas] = useState(0);
  let [idiomas, setIdiomas] = useState(0);

  let [total, setTotal] = useState(0);

  //handle Checks
  const handleMaquetar = () => setMaquetar(!maquetar);
  const handleSeo = () => setSeo(!seo);
  const handleGoogleAdds = () => setGoogleAdds(!googleAdds);

  //handle Inputs
  const handlePaginas = (evt) => setPaginas(Number(evt.target.value));
  const handleIdiomas = (evt) => setIdiomas(Number(evt.target.value));

  //Checkbox summation
  function totalChecks(evt){
    let name = evt.target.name;
    let chekced = evt.target.checked;
    if(name === 'maquetar' && chekced) setTotal(total+400);
    if(name === 'maquetar' && !chekced) setTotal(total-400);
    if(name === 'seo' && chekced ) setTotal(total+300);
    if(name === 'seo' && !chekced)  setTotal(total-300);
    if(name === 'googleAdds' && chekced) setTotal(total+200);
    if(name === 'googleAdds' && !chekced) setTotal(total-200);
  }
  
  //web paginas and idiomas inputs
  const sumarPaginas = () => setPaginas(++paginas)  
  const restarPaginas = () => (!paginas) ? setPaginas(paginas) : setPaginas(--paginas); 
  const sumarIdiomas = () => setIdiomas(++idiomas);
  const restarIdiomas = () => (!idiomas) ? setIdiomas(idiomas) : setIdiomas(--idiomas);

  // clean state paginas e idiomas 
  useEffect(()=> {
    if(maquetar) {
      setPaginas(1);
      setIdiomas(1);
    } else {
      setPaginas(0);
      setIdiomas(0);
    }
  },[maquetar]);

  //Añadir a total paginas
  useEffect(() => {
    
    total = 0;
    let totalMaquetar = (paginas*idiomas)*30;
    if(maquetar) total += 400;
    if(seo) total += 300;
    if(googleAdds) total += 200;
    setTotal(total+totalMaquetar);

  }, [paginas, idiomas]);

  return (
    <Form>
      <h3>Services </h3>
      <Checkbox 
        label='Maquetar (400€)' 
        id='maquetar'
        check={maquetar} 
        onChange={handleMaquetar}
        onClick={totalChecks}
      />
    
      {maquetar && 
      <Panel>
          
        <InputBotones>
          <label htmlFor='paginas'>num páginas</label>
          <button onClick={sumarPaginas}>+</button>
          <Input 
            id='paginas' 
            value={paginas} 
            onChange={handlePaginas}/>
          <button onClick={restarPaginas}>-</button>  
        </InputBotones>

        <InputBotones>
          <label htmlFor='idiomas'>num. idiomas</label>
          <button onClick={sumarIdiomas}>+</button>
          <Input 
            id='idiomas'
            value={idiomas} 
            onChange={handleIdiomas}/> 
          <button onClick={restarIdiomas}>-</button>
        </InputBotones>

      </Panel>}

      <Checkbox 
        label='Seo Analysis (300€)'
        id='seo'
        check={seo} 
        onChange={handleSeo} 
        onClick={totalChecks}
      /> 
      <Checkbox 
        label='Google Adds action (200€)'
        id='googleAdds'
        check={googleAdds} 
        onChange={handleGoogleAdds} 
        onClick={totalChecks}
      />
      <p>Total price is {total}</p>
    </Form>
  );
};




  