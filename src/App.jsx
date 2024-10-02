import react from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavFoot } from "./components/NavFoot";
import { Home } from "./pages/Home";
import TattooDetail from "./components/TattooDetail";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavFoot />}>
            <Route index element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<TattooDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
