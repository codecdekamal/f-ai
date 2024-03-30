import { ParallaxProvider } from 'react-scroll-parallax'; 
import './App.css'
import HomePage from './pages/HomePage'
function App() {
  return (
<ParallaxProvider>
<HomePage></HomePage>
</ParallaxProvider>
  )
}

export default App
