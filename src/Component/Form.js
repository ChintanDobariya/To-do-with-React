import React, { useState } from 'react'
import "../App.css"
import TodoList from './TodoList';

function Form({ inputText,setInputText, todos, setTodos, setStatus }){

    const inputTextHandler =(e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submittodoHandler  = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, {text : inputText, completed: false, id: Math.random() *1000 }
        ]);
    }

    const statusHandler = (e) =>{
        console.log(e.target.value);
        setStatus(e.target.value);
    }


    return(
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
            />
            <button onClick={submittodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option  value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );

}

export default Form;