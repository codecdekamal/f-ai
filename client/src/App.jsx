import { ParallaxProvider } from 'react-scroll-parallax'; 
import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
function App() {
  return (
<ParallaxProvider>
<HomePage></HomePage>
</ParallaxProvider>
  )
}

export default App
