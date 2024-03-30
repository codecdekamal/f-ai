import { Home } from 'lucide-react'
import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
function App() {

  return (
<>
    <Routes>
      <Route path = '/' element = {<HomePage/>} ></Route>
      <Route path = 'signup' element = {<SignupPage/>}></Route>
      <Route path = 'signin' element = {<SigninPage/>}></Route>
    </Routes>
</>
  )
}

export default App
