import React, { Suspense } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import Liked from "./components/Liked";
import Pagination from "./components/Pagination";
import LiveChat from "./components/LiveChat";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/slider" element={<ImageSlider />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/chat" element={<LiveChat />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
