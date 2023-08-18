import classes from './Modal.module.css';

const Modal = ({ children }) => {
    return (
        <>
            <div className={classes.backdrop} />

            {/* open is by default open={true} */}
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
};

export default Modal;