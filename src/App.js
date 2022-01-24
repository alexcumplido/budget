import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Home } from './components/Home.js';
import { Form } from './components/Form/Form.js';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Form" element={<Form/>}/>
      </Routes> 
    </BrowserRouter>
  )
};