import './assets/styles/css/App.css'
import Home from './components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  

  return (
      <BrowserRouter>
        <Routes>
            <Route path='../index.html' element={ <Home/> } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
