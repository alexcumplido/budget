import React, {useState} from 'react';
import styled from 'styled-components';

const Form = styled.div`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export function App() {

  let [total, setTotal] = useState(0);
  //checkbox useState
  const [maquetar, setMaquetar] = useState(false);
  const [seo, setSeo] = useState(false);
  const [googleAdds, setGoogleAdds] = useState(false);

  const handleMaquetar = () => setMaquetar(!maquetar);
  const handleSeo = () => setSeo(!seo);
  const handleGoogleAdds = () => setGoogleAdds(!googleAdds);

  //Checkbox handlers
  function handleChecks(event){
    let checkName = event.target.name;
    let isCheck = event.target.checked;

    if(checkName === 'maquetar' && isCheck) {
      setTotal(total+400);
    } else if (checkName === 'maquetar' && !isCheck) {
      setTotal(total-400);
    }

    if(checkName === 'seo' && isCheck ) {
      setTotal(total+300)
    } else if (checkName === 'seo' && !isCheck) {
      setTotal(total-300)
    }

    if(checkName === 'googleAdds' && isCheck) {
      setTotal(total+200)
    } else if (checkName === 'googleAdds' && !isCheck) {
      setTotal(total-200)
    }

  }

  return (
    <Form>
      <h3>Services </h3>
      <Checkbox
        label='Maquetación (400€)'
        name='maquetar'
        check={maquetar}
        onChange={handleMaquetar}
        onClick={handleChecks}
      />

      <Checkbox
        label='Seo Analysis (300€)'
        name='seo'
        check={seo}
        onChange={handleSeo}
        onClick={handleChecks}
      />
      <Checkbox
        label='Google Adds action (200€)'
        name='googleAdds'
        check={googleAdds}
        onChange={handleGoogleAdds}
        onClick={handleChecks}
        value={200}
      />
      <p>Total price is {total}</p>
    </Form>
  );
};

const Checkbox = ({label, name, check, onChange, onClick,}) => {
  return (
    <label>
      <input type='checkbox' name={name} checked={check} onChange={onChange} onClick={onClick}/>
      {label}
    </label>
  );
}

  //INPUTS SECTION
//IMPORT useEffect
// const Panel = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 0.5rem;
//   gap: 1rem;
//   border: 1px solid #000000;
//   border-radius: 10px;
// `;

// const InputBotones = styled.div`
//   display: flex;
// `;

  //Inputs useState
  // const [paginas, setPaginas] = useState(0);
  // const [idiomas, setIdiomas] = useState(0);

  // useEffect(() => {
  //   const costoMaquetar = () => {
  //     let costoInputs = 0;
  //     let costoChecks = 0;

  //     costoInputs = (Number(paginas) * Number(idiomas))*30;

  //     if(maquetar) costoChecks += 400;
  //     if(seo) costoChecks += 300
  //     if(googleAdds) costoChecks += 200;

  //     setTotal(costoChecks+costoInputs);
  //   }
  //   costoMaquetar();
  // }, [paginas, idiomas]);

  // const handlePaginas = (event) => {
  //   setPaginas(event.target.value);
  // }
  // const handleIdiomas = (event) => {
  //   setIdiomas(event.target.value);
  // }

  // const sumarInputs = () => {
  //   setPaginas(paginas+1)
  // }
  // const restarInputs = () => {
  //   setPaginas(paginas-1)
  // }
    /* {maquetar &&
    <Panel>

    <InputBotones>
      <label htmlFor='paginas'>num páginas</label>
      <button onClick={restarInputs}>-</button>
      <Input
        id='paginas'
        value={paginas}
        onChange={handlePaginas}
      />
      <button onClick={sumarInputs}>+</button>
    </InputBotones>

    <InputBotones>
      <label htmlFor='idiomas'>num. idiomas</label>
      <button onClick={restarInputs}>-</button>
      <Input
        id='idiomas'
        value={idiomas}
        onChange={handleIdiomas}
      />
      <button onClick={sumarInputs}>+</button>
    </InputBotones>

    </Panel>} */

  // const Input = ({onChange}) => {
  //   return (
  //     <label>
  //       <input  type='text' onChange={onChange}/>
  //     </label>
  //   );
  // }





