// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import GameLinkList from "./GameLinkList";
import SongList from "./SongList";



function Mainpage() {
    return(
        <>
            <div id="left-side">
                <Link to="/">返回主頁</Link>
                {<GameLinkList/>}
            </div>
            
            <div id="right-side">
                {<SongList/>}
            </div>
        </>
    );
}



export default Mainpage;