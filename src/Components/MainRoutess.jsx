import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Career from "../Pages/Career";
import ContactUs from "../Pages/ContactUs";
import EventPage from "../Pages/EventPage";
import Facility from "../Pages/Facility";
import Mentors from "../Pages/Mentors";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/career" element={<Career />}></Route>
      <Route path="/contactus" element={<ContactUs />}></Route>
      <Route path="/event" element={<EventPage />}></Route>
      <Route path="/facility" element={<Facility />}></Route>
      <Route path="/mentors" element={<Mentors />}></Route>
    </Routes>
  );
};

export default MainRoutes;
