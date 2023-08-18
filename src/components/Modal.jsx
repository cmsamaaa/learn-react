import classes from './Modal.module.css';

const Modal = ({ children, onClose }) => {
    return (
        <>
            <div className={classes.backdrop} onClick={onClose} />

            {/* open is by default open={true} */}
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
};

export default Modal;