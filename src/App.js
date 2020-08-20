import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./components/navbar";

export default function App() {
const [estadoConUsuario,setEstadoConUsuario] = useState(false); 
  return (
    <Router>
      <div>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Navbar estado={estadoConUsuario}></Navbar>
        <Switch>
          <Route path="/playlist">
          {estadoConUsuario && "playlist"}
          {!estadoConUsuario && "error"}
          </Route>
          <Route path="/"exact>
            <Login></Login> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

