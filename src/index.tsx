import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Odds from "./components/odds/Odds";
import Profile from "./components/profile/Profile";
import ProfileCreate from "./components/profile/ProfileCreate";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="odds" element={<Odds />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/new" element={<ProfileCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
