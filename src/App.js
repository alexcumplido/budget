import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Home } from './components/Home.js';
import { ServicesForm } from './components/Form/ServicesForm.js';

export function App() {
  return (
     <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home/>}
                />
                <Route 
                    path="/ServicesForm" 
                    element={<ServicesForm/>}
                />
               
            </Routes> 
        </BrowserRouter>
  )
};