import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/home/HomePage";
import Grades1to4Page from "../pages/grades1to4/Grades1to4Page";
import Grades5to8Page from "../pages/grades5to8/Grades5to8Page";
import Grades9to11Page from "../pages/grades9to11/Grades9to11Page";
import PersonalAcc from "../pages/PersonalAcc/PersonalAcc";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/grades1-4" element={<Grades1to4Page />} />
        <Route path="/grades5-8" element={<Grades5to8Page />} />
        <Route path="/grades9-11" element={<Grades9to11Page />} />
        <Route path="/login" element={<PersonalAcc />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
