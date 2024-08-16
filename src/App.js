import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/page/Home";
import About from "../src/page/About";
import Team from "../src/page/Team";
import Projects from "./page/Projects";
import FaqPage from "../src/page/Faq";
import Shoplist from "../src/page/shop";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home></Home> } />
                <Route path="/about-us" element={<About></About> } />
                <Route path="/team" element={<Team></Team> } />
                <Route path="/project" element={<Projects></Projects>} />
                <Route path="/faq" element={<FaqPage></FaqPage>} />
                <Route path="/shop" element={<Shoplist></Shoplist>} />
            </Routes>
        </>
    );
}

export default App;