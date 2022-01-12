import React, {useState, useEffect} from 'react';
import { Form } from './Style.js';
import { Checkbox } from './Checkbox.js';
import { Panel } from './Style.js'
import { InputWithButton } from './InputWithButton.js';

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
  function handleState (evt) {
    let name = evt.target.id;
    if(name==='maquetar') setMaquetar(!maquetar);
    if(name==='seo') setSeo(!seo);
    if(name==='googleAdds') setGoogleAdds(!googleAdds);
  }
  //handle Inputs
  const handlePaginas = (evt) => setPaginas(Number(evt.target.value));
  const handleIdiomas = (evt) => setIdiomas(Number(evt.target.value));

  //Checkbox summation
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
        onChange={handleState}
        onClick={totalChecks}
      />

      {maquetar && 
      <Panel>
        <InputWithButton 
          id='paginas' 
          value={paginas} 
          onClickSuma={sumarPaginas}
          onClickResta={restarPaginas}
          onChange={handlePaginas}
        />
        <InputWithButton 
          id='idiomas' 
          value={idiomas} 
          onClickSuma={sumarIdiomas}
          onClickResta={restarIdiomas}
          onChange={handleIdiomas}
        />
      </Panel>}

      <Checkbox 
        label='Seo Analysis (300€)'
        id='seo'
        check={seo} 
        onChange={handleState} 
        onClick={totalChecks}
      /> 
      <Checkbox 
        label='GoogleAdds action (200€)'
        id='googleAdds'
        check={googleAdds} 
        onChange={handleState} 
        onClick={totalChecks}
      />
      <p>Total price is {total}</p>
    </Form>
  );
};




  