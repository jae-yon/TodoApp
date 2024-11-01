import { useState } from "react";
import TodoModal from "./TodoModal";

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
    padding: 30,
    display: "grid",
  },
  todo: {
    display: "flex",
    justifyContent: "space-between",
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
    { id: 2, text: "요리하기", isChecked: false},
    { id: 3, text: "운동하기", isChecked: false},
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const [viewDetail, setViewDetail] = useState<boolean>(false);

  const [selected, setSelected] = useState<Todo | null>(null);

  const checkedHandler = (itemId : number) => {
    setTodos((prev) => 
      prev.map((item) => 
        item.id === itemId ? {...item, isChecked : !item.isChecked} : item
      )
    )
  }

  const todoClickHandler = (todo : Todo) => {
    setViewDetail(true);
    setSelected(todo);
  }

  const todoCloseHandler = () => {
    setViewDetail(false);
  }

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo("");
    } else {
      alert("error");
    }
  }

  const removeTodo = (itemId : number) => {
    setTodos(todos.filter((todo) => todo.id !== itemId));
  }

  return(
    <div style={styles.box}>
      {/* title */}
      <h4>{title}</h4>

      {/* add */}
      <div style={{display: "flex", justifyContent: "center", marginBottom: 20}}>
        <div style={{display: "flex", overflow: "hidden", borderRadius: 10, boxShadow: "0px 0px 2px grey"}}>
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
              <div style={styles.todo}>
                <input 
                  type="checkbox"
                  style={{marginRight: 20}}
                  onChange={() => {
                    checkedHandler(e.id);
                  }}
                />
                { e.isChecked ? 
                  <p
                    style={{cursor: "pointer"}} 
                    onClick={() => todoClickHandler(e)}
                  >
                    {e.text}
                  </p>
                  : 
                  <p style={{cursor: "default", color: "grey"}}>
                    <del>{e.text}</del>
                  </p> 
                }
              </div>
              <div style={{display: "flex"}}>
                <button 
                  style={{border: "none", outline: "none", backgroundColor: "#FFF"}}
                  onClick={() => removeTodo(e.id)}
                >✖️</button>
              </div>
            </div>
            
          ))
        }
      </div>

      <TodoModal show={viewDetail} todo={selected} handleClose={todoCloseHandler}/>

    </div>
  );
}

export default TodoList;