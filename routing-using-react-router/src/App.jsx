import {Fragment} from 'react'
import {BrowserRouter} from 'react-router'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import {Route} from 'react-router'
import {Routes} from 'react-router'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Fragment>Page Not Found</Fragment>} />
    </Routes>
  </BrowserRouter>
)

export default App
