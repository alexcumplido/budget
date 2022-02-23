import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainHome = styled.div`
    width: 40vw;
    margin: 4rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    border: 0.25rem solid #000;
    border-radius: 0.25rem;
`;

export const LinkHomeStyled = styled(Link)`
    padding: 2rem;
    margin: 0.5rem;
    font-size: 1.25rem;
    border: 0.25rem solid #000;
    border-radius: 0.25rem;
    background: #fa8072;
    color: #fff;
   &: hover {
        color: #000;
        background: #fba69d;
    }
`;

export const Dashboard = styled.div`
    width: 80vw;
    height: 80vh;
    margin: 4rem auto;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

export const Form = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    padding-top: 2rem;
`;

export const CheckboxForm = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Panel = styled.div`
    width: 80%;
    margin: 0.25rem;
    padding: 0.25rem;
    align-self: center; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border: 0.15rem solid #000;
    border-radius: 0.5rem;
`;

export const WrapperInputPanel = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const ButtonPanel =  styled.button`
    background: #fa8072;
    color: #fff;
    border: 0.25rem solid #fff;
    border-radius: 0.5rem;
    width: 2rem;
    height: 2rem;
    &: hover {
        color: #fff30a;
    }
`;

export const LinkButtonModal = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 1.70rem;
    height: 1.70rem;
    background: #dbdbdb;    
    border: none;
    font-size: 0.90rem;
    border-radius: 1rem;
    text-decoration: none;
    color: #000;
`;

export const LinkBackgroundModal = styled(Link)`
    text-decoration: none;
    color: #000;
`;

export const ModalBackground = styled.div`
    width: 100%;
    height: 100%;  
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.5);
`;

export const ModalText =  styled.p`
    padding: 2rem;
    border: 0.25rem solid #fa8072;
    border-radius: 10px;
    margin-bottom: 50px;
    background: #fff;
`;

export const InputForm = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;  

export const ButtonSaveBudget = styled.button`
    padding: 1rem;
    align-self: start;
    border: 0.15rem solid #000;
    border-radius: 0.5rem;
    color: #fff;
    background: #fa8072;
    &: hover {
        color: #000;
        background: #fba69d;
    }  
`;

export const WrapperBudget = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.65rem;
`;

export const GroupBtnBudget = styled.div`
    display: flex;
`;

export const BtnBudget = styled.button`
    flex: 1;
    padding: 1rem;
    border: none;
    color: #fff;
    background: #fa8072;
    &: hover {
        font-weight: 700;
        color: #000;
        background: #fba69d;
    }
`;

export const InputSearchStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    padding-left: 3.5rem;
    background: #fa8072;
    color: #fff;
    &: hover {
        font-weight: 700;
        color: #000;
        background: #fba69d;
    }
`;

export const UlBudget = styled.ul`
    overflow-y: scroll;
`;

export const ListItem = styled.li`  
    margin: 0.10rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.50rem;
    border: 0.10rem solid #fa8072;
`;

export const HeadingListItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const UlBodyListItem = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const FooterListItem = styled.div`
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
`;