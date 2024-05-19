// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import SongList from "./SongList";



function Mainpage() {
    return(
        <>
            <div id="left-side">
                <Link to="/games">遊戲區</Link><br/>
                {/* <Link to="/">小說區(無)</Link><br/> */}
                {/* <Link to="/">其它</Link><br/> */}
            </div>
            
            <div id="right-side">
                {<SongList/>}
            </div>
        </>
    );
}



export default Mainpage;