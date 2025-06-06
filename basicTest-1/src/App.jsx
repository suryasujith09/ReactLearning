import {Routes, Route, BrowserRouter} from 'react-router'
import Firstpage from './Compontents/FirstPage.jsx'
import Displaypage from './Compontents/DisplayPage.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Firstpage" element={<Firstpage />} />
          <Route path="/Displaypage" element={<Displaypage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
