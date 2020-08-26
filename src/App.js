import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Playlist from "./pages/playlist";

export default function App() {
const [estadoConUsuario,setEstadoConUsuario] = useState(true); 
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Navbar estado={estadoConUsuario}></Navbar>
        <Switch>
          <Route path="/playlist">
          {estadoConUsuario && < Playlist> </Playlist>}
          {!estadoConUsuario && "error"}
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

