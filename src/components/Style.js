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
    width: 90vw;
    height: 85vh;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    margin: 4rem auto;
`;

export const Form = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 1rem;
`;

export const WrapperInputsWeb = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const CheckboxStyed = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Panel = styled.div`
    align-self: center; 
    width: 80%;
    margin: 0.25rem;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border: 0.15rem solid black;
    border-radius: 0.5rem;
`;

export const ButtonStyled =  styled.button`
    background: salmon;
    color: white;
    border: 0.25rem solid white;
    border-radius: 0.5rem;
    width: 2rem;
    height: 2rem;
    &: hover {
        color: yellow;
    }
`;

export const ButtonModal=  styled.button`
    width: 1.75rem;
    height: 1.75rem;
    background: gray;
    border:none;
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
    border: 2px solid salmon;
    border-radius: 10px;
    margin-bottom: 50px;
    background: white;
`;

export const ButtonSaveBudget = styled.button`
    background: salmon;
    color: white;
    border: 0.15rem solid black;
    border-radius: 0.5rem;
    align-self: start;
    padding: 0.5rem;
     &: hover {
        color: yellow;
    }  
`;

export const InputStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;  

export const BudgetWrapper = styled.div`
    width: 40%;
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
    background: salmon;
    color: white;
     &: hover {
        color: yellow;
        font-weight: 600;
`;

export const InputSearchStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: salmon;
    padding: 0.5rem;
    border: none;
    background: salmon;
    color: white;
    &: hover {
        color: yellow;
        font-weight: 600;
`;

export const UlStyled = styled.ul`
    overflow-y: scroll;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    border: 0.10rem solid salmon;
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