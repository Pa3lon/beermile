import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CreateOdds from "./components/odds/CreateOdds";
import CreateUpdates from "./components/odds/CreateUpdates";
import EditOdds from "./components/odds/EditOdds";
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
          <Route path="odds/new" element={<CreateOdds />} />
          <Route path="odds/edit" element={<EditOdds />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/new" element={<ProfileCreate />} />
          <Route path="updates/new" element={<CreateUpdates />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
