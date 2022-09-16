import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import MainPage from "../pages/MainPage";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};
export default AppRouter;
