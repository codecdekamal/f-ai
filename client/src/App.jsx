import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import PlansAndPricingPage from './pages/PlansAndPricingPage'
import Vision from './pages/Vision'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}> </Route>
        <Route path="/vision" element={<Vision/>}> </Route>
        <Route path="/pricing" element={<PlansAndPricingPage/>}> </Route>

      </Routes>
    </>
  );
}

export default App;
