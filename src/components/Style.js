import styled from 'styled-components';




export const Form = styled.div`
    outline: 1px solid black;
    margin: 0 auto;
    position: relative;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // gap: 1rem;
`;

export const Panel = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
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
    outline: red 1px solid;
    position: absolute; 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalPopupText =  styled.p`
    border: 2px solid gray;
    border-radius: 10px;
    position: absolute;
    top: 175px;
    padding: 2rem;
    background: white;
    
`;