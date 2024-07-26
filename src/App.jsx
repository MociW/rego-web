import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Value from "./components/Value/Value";
import Step from "./components/Step/Step";
import Benefit from "./components/Benefit/Benefit";
import Price from "./components/Price/Price";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Value />
            <Benefit />
            <Step />
            <Price />
            <Footer />
        </div>
    );
};

export default App;
