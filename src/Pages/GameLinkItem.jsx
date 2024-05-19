// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";



function GameLinkItem({GameName="unknown", GameLink="unknown"}) {
	return(
		<>
			<a href={GameLink}>{GameName}</a><br/>
		</>
	)
}



export default GameLinkItem;