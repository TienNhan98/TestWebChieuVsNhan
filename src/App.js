import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/LoginPage/LoginPage";
import HomePage from "./Page/HomePage/HomePage";
import Layout from "./template/Layout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Page */}
          <Route path="/" element={<Layout content={<HomePage />} />} />
          {/* login */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
