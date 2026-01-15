import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import List from "./pages/List";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
