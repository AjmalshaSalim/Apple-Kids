
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import About from './pages/About'



function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/about' element={<About/>} />
    </Routes>
      
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
