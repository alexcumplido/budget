import { ModalBackground, ModalText } from './Style.js';

export function Modal ({ textModal, handleModal }) {
    return(
        <ModalBackground onClick={handleModal}>
                <ModalText onClick={handleModal}>
                   Inserte el número de  <strong>{textModal}</strong> que tendrá tu web porfavor.
                </ModalText>
        </ModalBackground>
    );
}