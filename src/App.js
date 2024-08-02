import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Trail from "./components/Demo/Trail";
import HomePage from "./pages/Home.Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/demo" element={<Trail />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
