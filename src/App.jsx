import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SelectedLeague from "./pages/SelectedLeague";
import StreamingPage from "./pages/StreamingPage";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/league/:selected_league" Component={SelectedLeague} />
          <Route path="/stream/:channel" Component={StreamingPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
