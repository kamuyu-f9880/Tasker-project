import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Variables.js';
import React, {useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Add from './pages/Add';
import Signup from './pages/Signup';
import TodoDetails from './pages/TodoDetails';


function App() {
  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route exact path='/home' element={ <Dashboard /> } />
          <Route exact path='/todo' element={ <Dashboard loggedIn={loggedIn}/> }/>
          <Route exact path='/addtodo' element={ <Add /> }/>
          <Route exact path='/login' element={ <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> }/>
          <Route exact path='/signup' element={ <Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> }/>
          <Route exact path='/todo-details' element={<TodoDetails />} />
          <Route exact path='/add-todo' element={<Add />}/>
          <Route path='/' element={ <Home /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
