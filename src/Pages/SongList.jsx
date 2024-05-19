// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import SongItem from "./SongItem";



const SongData = [
	{
		id: 1,
		name: "夜の向日葵",
		link: "https://www.youtube-nocookie.com/embed/s7nw8ySOprI?playlist=s7nw8ySOprI",
		autoplay: false
	},
	{
		id: 2,
		name: "エロゲソングonピアノ",
		link: "https://www.youtube-nocookie.com/embed/DlNhPOObCic?playlist=DlNhPOObCic",
		autoplay: false},
];

const songs = SongData.map((song) => {
	return(
		<SongItem
			key={song.id}
			SongName={song.name}
			SongLink={song.link}
			SongAutoplay={song.autoplay}
		/>
	);
})

function SongList() {

	return(
		<>
			{songs}
		</>
	);
}



export default SongList;