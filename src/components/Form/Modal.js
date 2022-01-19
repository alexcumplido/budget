import { ModalBackground } from '../Style.js';
import { ModalText } from '../Style.js';

export function Modal ({ inputHelper, handleModal }) {
    return(
        <ModalBackground onClick={handleModal}>
                <ModalText onClick={handleModal}>
                   Inserte el número de  <strong>{inputHelper}</strong> que tendrá tu web porfavor.
                </ModalText>
        </ModalBackground>
    );
}