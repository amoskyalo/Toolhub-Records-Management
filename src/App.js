import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="app">
      <main className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
