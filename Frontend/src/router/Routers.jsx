import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Tours from "../Pages/Tours/Tours";
import TourDetails from "../Pages/TourDetails/TourDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ThankyouPage from "../Pages/ThankyouPage/ThankyouPage";
import SearchResultList from "../Pages/SearchResultList/SearchResultList";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/tours/:id" element={<TourDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/ThankyouPage" element={<ThankyouPage />}></Route>
        <Route path="/tours/search" element={<SearchResultList />}></Route>
      </Routes>
    </>
  );
}
