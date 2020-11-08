import React, {useState, useEffect} from 'react'
import Tweet from './Tweet'
import Nav from './Component/Nav'
import Shop from './Component/Shop'
import Form from './Component/Form'
import TodoList from './Component/TodoList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App(){
  
  // const [users,setUsers] = useState([
  //   {name : "Jhone", con:"Hey There!!!"},
  //   {name : "Smith", con:"Hi!! I'm New there..."},
  //   {name :"Arya", con:"Okay then..."}
  // ]);

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
 
  useEffect(() => {
    getLocaltodos();
  }, []);

  useEffect(() => {
    FilterHandler();
    saveLocaltodos();
  }, [todos, status]);

  const FilterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;  
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocaltodos = () =>{
      localStorage.setItem("todos", JSON.stringify(todos));
  };
   
  const getLocaltodos = () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let localtodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localtodo);
    }
  };

  return(
    <div className="main">
      <Router>
        <Nav />
        <Switch >
          <Route path="/" exact component={Home} ></Route>
          <Route path="/shop" component={Shop} ></Route>
        </Switch>
      </Router>

      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos} 
      />

      {/* <div className="app">
        {users.map( user => (
          <Tweet name={user.name} con={user.con}/>
        ))}
      </div> */}

      <Footer />
    </div>
  );
}

const Home = () =>{
  return (
  <div className="header">
    <h1>Home Page</h1>
  </div>
  );
}

const Footer = () =>{
 return( 
 <div className="footer">
    <h4> © Chintan</h4>
  </div>
    );
}

export default App;
