import React from "react";
import Router from "./components/Router";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

export default function App() {

    return (
        <div className="flex bg-gray-100 min-h-screen w-screen gap-4">
            <Sidebar />
            <div className="col-span-9">
                <Router path="/"><DropdownPage /></Router>
                <Router path="/accordion"><AccordionPage /></Router>
                <Router path="/dropdown"><DropdownPage /></Router>
                <Router path="/buttons"><ButtonPage /></Router>
                <Router path="/modal"><ModalPage /></Router>
                <Router path="/table"><TablePage></TablePage></Router>
            </div>
        </div>
    );
}
