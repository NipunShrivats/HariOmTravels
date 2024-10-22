import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../router/Routers";
import "./Layout.css";
import "../../../src/App.css";

export default function Layout() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}
