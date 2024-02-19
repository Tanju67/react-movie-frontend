import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

function Modal({ children, className, onClick }) {
  const content = (
    <>
      <Backdrop onClick={onClick} />
      <div className={`${classes.modal} ${className}`}>
        <span onClick={onClick}>&times;</span>
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
