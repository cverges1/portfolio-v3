import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages";
import Nav from "./components/Nav";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";

const pages = ['About', 'Portfolio', 'Contact', 'Resume']

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <Router>
      <React.Fragment>
        <Header />
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <main>
          <Page currentPage={currentPage} />
        </main>
        <StickyFooter />
      </React.Fragment>
    </Router>
  );
}

export default App;
