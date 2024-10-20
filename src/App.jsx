

import './App.css'
import Land from './Component/Land'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
    
    <div className="App  dark:bg-gray-950 dark:text-white  font-montserrat">

        <Routes>
          <Route path="/" element={<Land />} />
        </Routes>

       
    </div>


  </BrowserRouter>
  )
}

export default App
