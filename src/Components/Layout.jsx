import { Outlet } from "react-router-dom";

import Header from "./Header";



function Layout() {
    return(
        <div className="min-h-screen bg-indigo-950 col-content-box-2">
            <Header/>
            <div id="main">
                <Outlet/>
            </div>
        </div>
    );
}



export default Layout;