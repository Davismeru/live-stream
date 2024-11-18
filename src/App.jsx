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
import MatchUpdater from "./pages/MatchUpdater";
import LeagueUpdater from "./pages/LeagueUpdater";
import Footer from "./components/Footer";
import AdminRegister from "./pages/AdminRegister";
import AdminSignin from "./pages/AdminSignin";

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
          <Route path="/admin/update_matches" Component={MatchUpdater} />
          <Route path="/admin/update_leagues" Component={LeagueUpdater} />
          <Route path="/register_admin" Component={AdminRegister} />
          <Route path="/admin_signin" Component={AdminSignin} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
