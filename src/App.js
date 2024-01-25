import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Nav from "./components/Nav";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
<Router>
  <React.Fragment>
    <Header />
    <Nav />
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
  <StickyFooter />
  </React.Fragment>
</Router>
  );
}

export default App;
