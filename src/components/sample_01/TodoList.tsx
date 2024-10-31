import { useState } from "react";

const styles = {
  box: {
    borderRadius: 15,
    width: 400,
    padding: 20,
    color: "#000",
    boxShadow: "0px 0px 10px grey",
    backgroundColor: "white",
  },
  list: {
    borderRadius: 15,
    boxShadow: "0px 0px 2px grey",
    fontSize: 18,
    fontWeight: 700,
    padding: 10,
    display: "grid",
    justifyContent: "left",
  },
  todo: {
    display: "flex",
    justifyContent: "left",
  }
}

type Todo = {
  id : number;
  text : string;
  isChecked : boolean;
}

// FC : Function Component
const TodoList : React.FC = () => {
  const title : string = "오늘 할 일";

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false},
    { id: 2, text: "코딩하기", isChecked: false},
    { id: 3, text: "운동하기", isChecked: false},
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const checkedHandler = (itemId : number) => {
    setTodos((prev) => 
      prev.map((item) => 
        item.id === itemId ? {...item, isChecked : !item.isChecked} : item
      )
    )
  }

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo("");
    } else {
      alert("error");
    }
  }

  return(
    <div style={styles.box}>
      {/* title */}
      <h3>{title}</h3>

      {/* add */}
      <div style={{display: "flex", justifyContent: "center", marginBottom: 20}}>
        <div style={{ overflow: "hidden", borderRadius: 5, boxShadow: "0px 0px 2px grey" }}>
          <input
            type="text" 
            placeholder="할 일 입력"
            style=
            {{
              padding: 10, 
              fontSize: 14, 
              border: "none",
              outline: "none"
            }}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={() => addTodo()} 
            style={{padding: 10, fontSize: 14, border: "none" }}
          >➕</button>
        </div>
      </div>

      {/* list */}
      <div style={styles.list}>
        {
          todos.map((e, index) => (
            <div style={styles.todo} key={index}>
              <input 
                type="checkbox"
                style={{marginRight: 20}}
                onChange={() => {
                  checkedHandler(e.id);
                }}
              />
              { e.isChecked ? <p>{e.text}</p> : <p style={{color: "grey"}}><del>{e.text}</del></p> }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TodoList;