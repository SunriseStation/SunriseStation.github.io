// import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../img/Ilya.jpg";



function Header() {
	return(
		<header id="header">
			<Link to="/" className="flex" title="主頁">
				<img src={Logo} className="w-7 h-7 rounded-md"/>
				<h1 className="text-2xl font-bold font-funny ">SunriseStation</h1>
			</Link>
		</header>
	);
}



export default Header;