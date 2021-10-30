import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Student from "./pages/Student";
import Addstudent from "./pages/Addstudent";
import Editstudent from "./pages/Editstudent";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/add-student" component={Addstudent} />
        <Route path="/edit-student/:id" component={Editstudent} />
        <Route exact path="/" component={Student} />
      </Switch>
    </Router>
  );
};

export default App;
