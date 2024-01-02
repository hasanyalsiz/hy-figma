import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Component/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
