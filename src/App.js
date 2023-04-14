import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route exact path="/*" element={<h4>404</h4>} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
