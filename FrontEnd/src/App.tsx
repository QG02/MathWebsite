import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Practice from "./pages/Practice.tsx";

function App() {
  return (
    <>
      <div className="title-container">
	<h1> Golden Ratio Tutoring </h1>
	<nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
	  <Link to="/practice">Practice</Link>
	</nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </>
  );
}

export default App;

