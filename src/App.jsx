import './assets/styles/css/App.css'
import Home from './components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  

  return (
      <BrowserRouter>
        <Routes>
            <Route path='https://calm-taiga-52744.herokuapp.com/' element={ <Home/> } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
