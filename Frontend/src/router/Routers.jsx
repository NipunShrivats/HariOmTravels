import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Tours from "../Pages/Home/Home";
import TourDetails from "../Pages/TourDetails/TourDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SearchResultList from "../Pages/SearchResultList/SearchResultList";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Tours" element={<Tours />}></Route>
        <Route path="/Tours/:id" element={<TourDetails />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Tours/search" element={<SearchResultList />}></Route>
      </Routes>
    </>
  );
}
