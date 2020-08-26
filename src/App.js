import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./components/Homepge.js";
import Registration from "./components/registration.component";
import NewHeader from "./components/headerMain"
import Header from "./components/headerSub"


function App() {
    return ( 
        <Router>
        <Route path="/" component={Homepage} />
        <Route path="/" component={Registration} />
        </Router>
       
    );
    
}

export default App;