import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.compenent";
import EditExercises from "./components/edit-exercise.component";
import CreateExercises from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

import { BrowserRouter as Router, Route } from  "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit:id" exact component={EditExercises} />
      <Route path="/create" exact component={CreateExercises} />
      <Route path="/user" exact component={CreateUser} />
      
    </Router>
  );
}

export default App;