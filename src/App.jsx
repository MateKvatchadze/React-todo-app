import React, {useState, useEffect} from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import FilterBar from "./components/FilterBar/FilterBar";
import TodoList from "./components/TodoList/TodoList";
import "./App.css"
function App() {
  
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
          const savedTodos = localStorage.getItem("todo_Key");
          return savedTodos ? JSON.parse(savedTodos) : []});

  const [filter, setFilter] = useState("all");


  useEffect(() =>{
    localStorage.setItem("todo_Key", JSON.stringify(todos));
  },[todos])


  let filteredTodos = todos;

  if(filter === "active"){
    filteredTodos = todos.filter((todo) => !todo.done);
  }
  if(filter === "completed"){
    filteredTodos = todos.filter((todo) => todo.done)
  }


  function handleSubmit(event){
    event.preventDefault();

    if(text.trim() === "")return;
    
    const newTodo = {id: crypto.randomUUID(),
                     todoText: text, 
                     done: false
                    }

    setTodos((t) => [...t, newTodo]);
    setText("");
              
  }


  function deleteTodo(id){
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id))
  }

  function toggleTodo(id){
    setTodos((prevTodos) => 
              prevTodos.map((todo) =>{
                  if(todo.id === id){
                     return{...todo, done: !todo.done }
                  }
                  
                  return todo
                 
              }))
  }

  function clearCompleted(){
    setTodos(todo => todo.filter(t => !t.done))
  }

  function editTodo(id, newText){
    setTodos((prevTodos) =>
      prevTodos.map((todo) => 
        todo.id === id 
          ? { ...todo, todoText: newText }
          : todo
        )
     )
  }



  return (
    <div className="app">
     <div className="todoCard">
     <h1 className="todoTitle">Todo App</h1>

      <div className="topBar">
        <span className="tasksCount">
            Tasks left: {todos.filter(todo => !todo.done).length}
        </span>
      
        <button className="clearBtn" onClick={clearCompleted}>
          Clear Completed
        </button>

        <FilterBar setFilter={setFilter}
                  filter={filter}/>
      </div>


      <TodoForm 
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}/>

      <TodoList 
        filteredTodos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        filter={filter}
        editTodo={editTodo}
      />


     </div> 
    </div>
  )
}

export default App
