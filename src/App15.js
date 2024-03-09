import React from "react";
import Feeds from "./Feeds";
import Post from "./Post";
import Album from "./Album"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App15() {
  return (
    <div>
      <Router>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link>
        <Routes>
            <Route path="/" index element={<Feeds/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/album" element={<Album/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}