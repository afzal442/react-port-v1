import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [name, setName] = React.useState('');

  useEffect(() => {
    fetch('http://localhost:5000/view-profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => {
        setName(result.name);
        console.log(result.name);
      })
  }, [])

  return (
    <Router>
      <Navbar name={name} setName={setName}/>
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/login" exact component = {Login} />
        <Route path="/register" exact component = {Register} />
      </Switch>
    </Router>
  );
}

export default App;
