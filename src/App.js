import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
  return (
    <div className="app">
      <main className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
