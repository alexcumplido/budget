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
    &:hover{
        border-color: #fa8072;
        background: #000;
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

export const ButtonModal=  styled.button`
    width: 1.70rem;
    height: 1.70rem;
    background: #dbdbdb;    
    border: none;
    border-radius: 1rem;
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
        color: #fff30a;
    }  
`;

export const BudgetWrapper = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.6rem;
`;

export const NavButtons = styled.div`
   display: flex;
`;

export const BtnNav = styled.button`
    flex: 1;
    padding: 0.5rem;
    border: none;
    background: #fa8072;
    color: #fff;
     &: hover {
        color: yellow;
        font-weight: 600;
`;

export const InputSearchStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fa8072;
    padding: 0.5rem;
    border: none;
    background: #fa8072;
    color: #fff;
    &: hover {
        color: #fff30a;
        font-weight: 600;
`;

export const UlStyled = styled.ul`
    overflow-y: scroll;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    border: 0.10rem solid #fa8072;
    margin: 0.10rem;
`;

export const HeadingListItem = styled.div`
    display: flex;
    gap: 1rem;
`;

export const BodyListItem = styled.div`
`;

export const FooterListItem = styled.div`
        display: flex;
        justify-content: flex-end;
        font-weight: 600;
`;