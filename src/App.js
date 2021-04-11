import React,{ useState,useEffect } from "react";
import './App.css';
//importing components
import Form from './components/form';
import Todolist from './components/todolist';



function App() {
  


  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all"); 
  const [filterTodos,setFilterTodos]=useState([]);
  //functions
  useEffect(()=>{
    filterHandler();

  },[todos,status]);
  
  const filterHandler=function(){
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo=>todo.completed=== true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo=>todo.completed=== false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  
  return (
    <div className="App">
     <header>
       <h1>Todo App</h1>
     </header>
     
     <Form 
     inputText={inputText}
     todos={todos} 
     setTodos={setTodos} 
     setInputText={setInputText}
     setStatus={setStatus}
     />
     <Todolist 
     filterTodos={filterTodos}
     setTodos={setTodos} 
     todos={todos}/>
    </div>

  );
}

export default App;
