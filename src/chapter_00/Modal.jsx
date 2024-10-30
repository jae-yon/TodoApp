import "./styles.css";
import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const Handler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={Handler}>Open Modal</button>
      {isOpen ? (
        <div className="modal-backdrop">
          <div className="modal-view" onClick={Handler}>Hello world</div>
        </div>
      ) : null}
      
    </div>
  );
}

export default Modal;