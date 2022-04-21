import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import Error from "../pages/Error";
import MainPage from "../pages/MainPage";
import UserDetailedPage from "../pages/UserDetailedPage";
import Users from "../users/Users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetailedPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
