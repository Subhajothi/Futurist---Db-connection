import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'src/Route'
import { Footer} from 'src/Page/Footer/footer.js'
function App() {
  return (
    <Router>
      <Routes />
      <Footer/>
    </Router>

  )
}

ReactDOM.render(<App />, document.getElementById('app-root'))
