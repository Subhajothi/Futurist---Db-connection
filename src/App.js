import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
// import loadable from '@loadable/component';
import CreateUser from "./components/create-user.component.js";
import Carousel from "./components/Carouse.js";
import Header from "./components/Navbar.js";
import  Footer from './components/footer.js'
import userdetails from "./components/Display-UserDetails.js"
// const Header = loadable(() => import('./components/Navbar.js'))

function App() {
  return (<Router>
     
     <Header />
       
            <Switch>
              <Route exact path='/' component={Carousel} />
              <Route path="/create" component={CreateUser} />
              <Route path="/user" component={userdetails} />
              
            </Switch>
            <Footer />
          
  </Router>
  );
}

export default App;


