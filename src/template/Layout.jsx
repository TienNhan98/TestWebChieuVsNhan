import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Layout({ content }) {
  return (
    <div>
      <Header />
      {content}
      <Footer></Footer>
    </div>
  );
}
