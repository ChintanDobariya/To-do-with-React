import React from 'react'
import Todo from './Todo'
import '../App.css'

function TodoList({todos, setTodos, filteredTodos}){
    return(
        <div className="todo-container">
            <ul class="todo-list">
                {filteredTodos.map((todo) =>(
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        todo = {todo}
                        text={todo.text}
                     />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;