import {Fragment} from 'react'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

const App = () => (
  <Fragment>
    <Header />
    <Home />
    <About />
    <Contact />
  </Fragment>
)

export default App
