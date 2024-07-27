import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Lobby from "./pages/lobby/Lobby";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
     <Router>
          <div className="p-5">
            <Header />
          </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
