import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import PlansAndPricingPage from './pages/PlansAndPricingPage'
import Vision from './pages/Vision'
import ConnectPage from './pages/ConnectPage'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}> </Route>
        <Route path='/plans-prices' element={<PlansAndPricingPage/>}></Route>
        <Route path='/connect' element = {<ConnectPage/>}></Route>
        <Route path="/vision" element={<Vision/>}> </Route>
<<<<<<< HEAD
        <Route path="/plans-prices" element={<PlansAndPricingPage/>}> </Route>
=======
        <Route path="/pricing" element={<PlansAndPricingPage/>}> </Route>
>>>>>>> 0384c7a7695a9c1334684391966d22c616ab09b9
      </Routes>
    </>
  );
}

export default App;
