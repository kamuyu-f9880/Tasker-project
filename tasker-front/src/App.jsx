import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./components/Signup";
import Task from "./pages/Dashboard";
import Add from "./pages/Add";
import Update from "./pages/update";


export default function TaskList () {

    return (
        <div>
          
        <Routes>
            <Route path="/" element= {<Signup />}></Route>
            <Route path="/login" element= {<Login />}></Route>
            <Route path="/task" element= {<Task />}></Route>
            <Route path="/add" element= {<Add />}></Route>
            <Route path="/update" element= {<Update />}></Route>
        </Routes>
        </div>
    )
}