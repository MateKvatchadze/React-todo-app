import React, {useRef} from "react";
import "./TodoForm.css" ;
function TodoForm({ text, setText, handleSubmit}){
  const inputRef = useRef(null)
  return(
    
      <form className="todoForm"
        onSubmit={(e) => { handleSubmit(e)
        inputRef.current.focus()
      }}>
        <input 
        className="todoInput"
        name="todo"
        placeholder="Add a task"
        ref={inputRef}
        type="text" 
        value={text}
        onChange={(event) => setText(event.target.value)}
        />

        <button className="addBtn" type="submit">submit</button>
     </form>
    
  )
}
export default TodoForm