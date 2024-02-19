import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

function Modal({ children, className, onClick, onClose }) {
  const content = (
    <>
      <Backdrop onClick={onClick} />
      <div onClick={onClose} className={`${classes.modal} ${className}`}>
        <span className={classes.closeBtn} onClick={onClick}>
          &times;
        </span>
        {children}
      </div>
    </>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("overlay-hook")
  );
}

export default Modal;
