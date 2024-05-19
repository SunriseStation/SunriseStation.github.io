// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";



function SongItem({SongName="unknown", SongLink="unknown", SongAutoplay=false}) {
	SongLink += "&autoplay=" + (SongAutoplay ? "1" : "0") + "&loop=1&controls=0&disablekb=1";
	return(
		<>
			<div className="embed-hidder">
			<div className="frame-container">
				<iframe src={SongLink} title={SongName}
				width="560" height="315" allow="autoplay"
				referrerPolicy="strict-origin-when-cross-origin"/>
			</div>
			</div>
		</>
	)
}



export default SongItem;