import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applications from "./routes/applications";
import Application from "./routes/application";
import Search from "./routes/search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Applications />} />
          <Route path="applications" element={<Applications />} />
          <Route path="applications/:applicationId" element={<Application />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Applications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);