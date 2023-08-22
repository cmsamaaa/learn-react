import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

const Modal = ({ children }) => {
    const navigate = useNavigate();

    const closeHandler = () => {
        navigate('..');
    };

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler} />

            {/* open is by default open={true} */}
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
};

export default Modal;