import React from "react";

const styles = {
  modal: {
    boxShadow: "0px 0px 10px grey",
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 300,
    display: "gird",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxHeight: 30,
    padding: 10,
  },
  body: {
    padding: 30,
    borderTop: "solid 1px rgb(229 231 235)",
  }
}

type Todo = {
  id : number;
  text : string;
  isChecked : boolean;
}

type ModalProps = {
  show : boolean;
  todo : Todo | null;
  handleClose : () => void;
}

const TodoModal : React.FC<ModalProps> = ({show, todo, handleClose}) => {
  return (
    <>
      { show ? 
        <div style={{ position: "fixed", display: "grid", placeItems: "center", backgroundColor: "#00000015", top: 0, left: 0, bottom: 0, right: 0, zIndex: 999 }}>
          <div className="modalDialog" style={styles.modal}>
            <div className="modalHeader" style={styles.header}>
              <h6 style={{fontSize: 18}}>할 일 상세정보</h6>
              <button 
                style={{ cursor: "pointer", fontSize: 12, border: "none", backgroundColor: "#FFF" }}
                onClick={()=>handleClose()}
              >✖️</button>
            </div>
            <div className="modalBody" style={styles.body}>
              {todo?.text}
            </div>
          </div>
        </div> : null
      }
    </>
    
    
  );
}

export default TodoModal;