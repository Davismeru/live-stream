import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SelectedLeague from "./pages/SelectedLeague";
import StreamingPage from "./pages/StreamingPage";
import NotStarted from "./pages/NotStarted";
import BuyMeACoffee from "./pages/BuyMeACoffee";
import BlogPage from "./pages/Blog";
import BlogsHome from "./pages/BlogsHome";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/league/:selected_league" Component={SelectedLeague} />
          <Route path="/stream/:channel" Component={StreamingPage} />
          <Route path="/fixture/not_started" Component={NotStarted} />
          <Route path="/buy_me_a_coffe" Component={BuyMeACoffee} />
          <Route path="/blog/:title" Component={BlogPage} />
          <Route path="/blog" Component={BlogsHome} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
