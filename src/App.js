import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/loginPage";
import Home from "./pages/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
