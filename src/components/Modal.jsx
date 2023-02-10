import { ReactDOM } from "react";

const Modal = ({ children }) =>
  ReactDOM.createPortal(children, document.querySelector("#modal"));

export default Modal;
