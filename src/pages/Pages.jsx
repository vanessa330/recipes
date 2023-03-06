import Home from "./Home";
import Searched from "./Searched";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import { Route, Routes, useLocation } from "react-router-dom";

function Pages() {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
  );
}

export default Pages;