import React from "react";

const Form= function({setInputText,setTodos,setStatus,todos,inputText}){
    const inputTextHandler =function(e){
        // console.log(e.target.value);
        setInputText(e.target.value);

    };
    const submitTodoHandler=function(e){
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText,completed:false, id:Math.random()*1000}
        ]);
        setInputText("");
    };
    const statusHandler=function(e){
      setStatus(e.target.value);
    }
    return(
        <form>
        <input value={inputText} type="text" onChange={inputTextHandler} className="todo-input"  />
        <button onClick={submitTodoHandler}  className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );

};
export default Form;