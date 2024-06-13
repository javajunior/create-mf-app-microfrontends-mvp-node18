import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./index.scss";
import { HeaderComponent } from "./HeaderComponent";
import { HomeComponent } from "./HomeComponent";

import Products from "remote/ListProductsComponent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  </div>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
