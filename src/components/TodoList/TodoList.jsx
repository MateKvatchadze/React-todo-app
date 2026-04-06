import TodoLi from "../TodoLi/TodoLi"
import "./TodoList.css"
function TodoList({filteredTodos, toggleTodo, deleteTodo, filter, editTodo}){

   if(filteredTodos.length === 0){
      if(filter === "all")return <p>No tasks yet</p>
      if(filter === "active")return <p>No active tasks</p>
      if(filter === "completed")return <p>No completed tasks</p>
   }
  return(
  <>
    <ul className="todoUl">
      
      {filteredTodos.map((todo) => (
       
       <TodoLi 
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  </>)
}

export default TodoList