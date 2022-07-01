import React from "react";
import { Route, Routes } from "react-router-dom";

import Aboutpage from "../Page/Aboutpage/Aboutpage";
import Cartpage from "../Page/CartPage/Cartpage";
import Details from "../Page/Details/Details";
import HomePage from "../Page/HomePage/HomePage";

import Productpage from "../Page/Productpage/Productpage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/productpage" element={<Productpage />}></Route>
      <Route path="/aboutpg" element={<Aboutpage/>}></Route>
      <Route path="/cartpage" element={<Cartpage/>}></Route>
      <Route path="/:id" element={<Details/>}></Route>
      
    </Routes>
  );
};
export default Router;