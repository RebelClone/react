import React from "react";

import Navbar from "./Navbar";
import Invoice from "./Invoice";
import { AmountProvider } from "./Context/AmountContext";
// import Footer from './Footer'

const App = () => {
    return (
        <AmountProvider>
            <Navbar />
            <br />
            <Invoice />
        </AmountProvider>
    );
};

export default App;
