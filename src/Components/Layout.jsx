// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Header from "./Header";



function Layout() {
    return(
        <>
            <Header/>
            <div id="main">
                <Outlet/>
            </div>
        </>
    );
}



export default Layout;