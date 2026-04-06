import { useState, useRef, useEffect } from "react";
import "./TodoLi.css";

function TodoLi({ todo, toggleTodo, deleteTodo, editTodo}){

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.todoText);
  const editInputRef = useRef(null);

  useEffect(() =>{
    if(isEditing){
      editInputRef.current?.focus()
    }
  },[isEditing])

  function handleSave(){
    if(editText.trim() === ""){
      setEditText(todo.todoText);
        setIsEditing(false)
        return
      };

    editTodo(todo.id, editText);
    setIsEditing(false);
  }
  function handleCancel(){
    setEditText(todo.todoText);
    setIsEditing(false);
  }


  return(
       <li className="todoLi"> 
          <input 
            type="checkbox" 
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)} 
        />
      {isEditing ? (
       <input 
        ref={editInputRef}
        className="editInput"
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            handleSave();
          }
          if(e.key === "Escape"){
            handleCancel();
          }
        }}  
       />
      ) : (<span className={`todoText ${todo.done ? "done" : ""}`}>
             {todo.todoText}
          </span>
      )}
       
      {isEditing ? (
        <>
          <button className="saveBtn" onClick={handleSave}>
              Save
          </button>
          <button className="cancelBtn" onClick={handleCancel}>
              Cancel
          </button>
       </>
       ) : (
       <>
          <button className="editBtn"
                  onClick={() => {
                     setEditText(todo.todoText);
                     setIsEditing(true);
                     }}
          >
              Edit
          </button>

          <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
              Delete
          </button>
       </>
      )}
      
       
       </li>
  )
}
export default TodoLi