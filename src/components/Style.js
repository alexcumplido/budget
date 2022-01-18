import styled from 'styled-components';

export const Form = styled.div`
    border: 1px solid black;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 0.5rem;
    
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
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.5);
`;

export const ModalText =  styled.p`
    padding: 2rem;
    border: 2px solid salmon;
    border-radius: 10px;
    margin-top: 100px;
    background: white;
`;