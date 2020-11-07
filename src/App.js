import React, {useState} from 'react'
import Tweet from './Tweet'
import Nav from './Component/Nav'
import Shop from './Component/Shop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App(){
  
  const [users,setUsers] = useState([
    {name : "Jhone", con:"Hey There!!!"},
    {name : "Smith", con:"Hi!! I'm New there..."},
    {name :"Arya", con:"Okay then..."}
  ]);

  return(
    <div className="main">
      <Router>
        <Nav />
        <Switch >
          <Route path="/" exact component={Home} ></Route>
          <Route path="/shop" component={Shop} ></Route>
        </Switch>
      </Router>
      <div className="app">
   
        {users.map( user => (
          <Tweet name={user.name} con={user.con}/>
        ))}
      </div>
    </div>
  );
}

const Home = () =>{
  return (<div>
    <h1>Home Page</h1>
  </div>);
}

export default App;
