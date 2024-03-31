import { Home } from 'lucide-react'
import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import PlansAndPricingPage from './pages/PlansAndPricingPage'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage/>}></Route>
        <Route path="/signup" element={<SignUp/>}> </Route>
      </Routes>
    </>
  );
}

export default App;
