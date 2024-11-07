import { useState } from "react";
import TodoModal from "./TodoModal";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

type Todo = {
  id : number;
  text : string;
  isChecked : boolean;
}

const tasks = [
  { id: 1, text: "공부하기", isChecked: false},
  { id: 2, text: "요리하기", isChecked: false},
  { id: 3, text: "운동하기", isChecked: false},
]

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

// FC : Function Component
const TodoList : React.FC = () => {

  const title : string = "오늘 할 일";

  const [todos, setTodos] = useState<Todo[]>(tasks);

  const [newTodo, setNewTodo] = useState<string>("");

  const [viewDetail, setViewDetail] = useState<boolean>(false);

  const [selected, setSelected] = useState<Todo | null>(null);

  const onDragHandler = (result : any) => {
    // result 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함
    console.log(result);
    // 목적지가 없으면 이 함수를 종료
    if (!result.destination) return;
    // 리액트 불변성을 지켜주기 위해 새로운 데이터 생성
    const items = Array.from(todos);
    console.log(items);
    // 1. 변경시키는 아이템을 배열에서 지워주기
    // 2. 리턴 값으로 지워진 아이템을 잡아주기
    const [reorderedItem] = items.splice(0, 1);
    console.log(reorderedItem);
    // 원하는 자리에 변경될 아이템을 삽입해 주기
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
    console.log(items);
  }

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
      <DragDropContext onDragEnd={onDragHandler}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div style={styles.list}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                todos.map((e, index) => {
                  return(
                    <Draggable key={e.id} draggableId={String(e.id)} index={index}>
                      {(provided) => (
                        <div 
                          key={index}
                          style={styles.todo}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
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
                            <div style={{display: "flex"}}>
                              <button 
                                style={{border: "none", outline: "none", backgroundColor: "#FFF"}}
                                onClick={() => removeTodo(e.id)}
                              >✖️</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  )
                })
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* <div style={styles.list}>
        {
          todos.map((e, index) => (
            <div style={styles.todo} key={index}>
              
            </div>
          ))
        }
      </div> */}

      <TodoModal show={viewDetail} todo={selected} handleClose={todoCloseHandler}/>

    </div>
  );
}

export default TodoList;