import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
const Carousel = loadable(() => import('src/Page/Carousel/Carouse.js'))
const Login = loadable(() => import('src/Page/Login/index.jsx'))
const Header = loadable(() => import('src/Page/Header/Navbar.js'))
class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: sessionStorage.user || false
    }
  }
  changeSigninState = (value) => {
    this.setState({
      loggedIn: value
    })
  }
  render() {
    return (
      <>
        {this.state.loggedIn && <NewHeader changeSigninState={this.changeSigninState} />}
        {!this.state.loggedIn && <Header />}
        <Switch>
          <Route exact path="/">
            <Carousel />
          </Route>
         
          <Route exact path="/register">
            <Login changeSigninState={this.changeSigninState} />
          </Route>     
          
        </Switch>
      </>
    )
  }
}

export default Routes
export { Routes }
