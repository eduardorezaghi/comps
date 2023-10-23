import React from "react";
import Link from "./components/Link";
import Router from "./components/Router";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

export default function App() {

    return (
        <div>
            <Link path="/accordion">Go to accordion</Link>
            <Link path="/dropdown">Go to dropdown</Link>
            <div>
                <Router path="/accordion"><AccordionPage /></Router>
                <Router path="/dropdown"><DropdownPage /></Router>
            </div>
        </div>
    );
}
