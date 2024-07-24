import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import RoomWar from "./pages/RoomWar";
import Lobby from "./pages/lobby/Lobby";

function App() {
  return (
    <div className="App">
     <Router>
          <div className="p-5">
            <Header />
          </div>
        <Routes>
          <Route path="/" element={<RoomWar />} />
          <Route path="/lobby" element={<Lobby />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
