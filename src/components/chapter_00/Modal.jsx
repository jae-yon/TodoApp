import { useState } from "react";

const styles = {
  backdrop: {
    position: "fixed",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#00000015",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 20,
    zIndex: 999,
  },
  modal: {
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 300,
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const Handler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={Handler}>Open Modal</button>
      {isOpen ? (
        <div style={styles.backdrop}>
          <div style={styles.modal} onClick={Handler}>Hello world</div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;