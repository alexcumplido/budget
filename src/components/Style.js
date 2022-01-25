import styled from 'styled-components';


export const HomeStyled = styled.div`
    width: 60%;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    border: 0.20rem solid black;
    border-radius: 0.25rem;
`;


export const ButtonHome = styled.button`
    margin: 0.5rem;
    padding: 1rem;
    font-size: 1.25rem;
    border: 0.30rem solid salmon;
    border-radius: 0.25rem;
    background: white;
`;


export const Dashboard = styled.div`
    display: flex;
`;

export const Form = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 0.5rem;
    border: 1px solid gray;
    border-radius: 5px;
`;

export const Panel = styled.div`
    margin: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 1px solid gray;
    border-radius: 10px;
`;

export const WrapperInputText = styled.div`
    display: flex;
`;  

export const WrapperInputCheckbox = styled.div`
    display: flex;
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
    border: 2px solid salmon;
    border-radius: 10px;
    margin-bottom: 50px;
    background: white;
`;

export const BudgetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 10px;    
    font-size: 0.6rem;
    ul {
        list-style: none;
        
    }
`;