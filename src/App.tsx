
import Nav from "./Components/Nav";
import './index.css'
import Dash from "./Pages/Dashboard";
import Menu from "./Pages/MenuPage"

import { Routes, Route } from "react-router-dom";


  export default function App() {
  return (
    <>
    <Nav />
      <Routes>
        {/* DEFAULT PAGE */}
         <Route path="/" element={<Dash />} />

        {/* OTHER PAGES */}
        <Route path="menu" element={<Menu />} />
      </Routes>
    
    </>
  );
}



