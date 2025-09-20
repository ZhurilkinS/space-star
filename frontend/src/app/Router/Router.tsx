import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import AdminPage from "../../pages/AdminPage/AdminPage";



export default function Router(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}