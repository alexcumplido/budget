import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Home } from './Home.js';
import { ServicesForm } from './ServicesForm.js';

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home/>}
                />
                <Route 
                    path="/ServicesForm/" 
                    element={<ServicesForm/>}
                />
            </Routes>
        </BrowserRouter>
    );
}   