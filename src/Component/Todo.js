import React from 'react'

function Todo({ text, todo, todos, setTodos }){

    const deletehandler = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id));
      
    };

    const completehandler = () => {
        setTodos(todos.map((el) => {       
            if(el.id === todo.id){
                return {
                    ...el, completed: !el.completed
                }
            }
            return el;
        }));
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : " "}`}>{text}</li>
            <button onClick={completehandler} className="complete-btn">
                <i className="fa fa-check"></i>
            </button>
            <button onClick={deletehandler} className="trash-btn">
                <i className="fa fa-trash"></i>
            </button>
        </div>
    );

}

export default Todo;

