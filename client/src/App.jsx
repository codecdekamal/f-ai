import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes,Route } from "react-router-dom";
import SignUp from "./customComponents/Signup";
import SigninPage from "./pages/SigninPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage/>}></Route>
        <Route path="signup" element={<SignUp/>}> </Route>
      </Routes>
    </>
  );
}

export default App;
