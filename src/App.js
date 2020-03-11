import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Modal from "./components/common/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerPage from "./components/customer/CustomerPage";
import "bootstrap/dist/js/bootstrap.min.js";
// import logo from './logo.svg';
import './App.css';
// import Modal from './components/common/Modal';
// import MainLayout from './components/MainLayout';
import Layout from './components/agent/Layout'


function App() {
  return (
    <div className="App">
       <Router>
                <Switch>
                  <Route exact path="/" component={CustomerPage} />
                  <Route exact path="/agent" component={Layout}/>
                     <Modal />
                </Switch>
       </Router>
    </div>
  );
}

export default App;
