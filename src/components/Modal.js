import { useParams } from 'react-router-dom';
import { ModalBackground, ModalText, LinkBackgroundModal } from './Style.js';

export function Modal () {
    let params = useParams();
    return(
        <LinkBackgroundModal to="/app">
            <ModalBackground>
                    <ModalText>
                    Inserte el número de <strong>{params.id}</strong> que tendrá tu web porfavor.
                    </ModalText>
            </ModalBackground>
        </LinkBackgroundModal>
    );
}