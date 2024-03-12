import React from "react";
import Feeds from "./Feeds";
import Post from "./Post";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App17() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Feeds</Link> | <Link to="/posts">Post</Link>
        <Routes>
            <Route path="/post" element={<Posts/>}></Route>
            <Route path="/" index element={<Feeds/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
