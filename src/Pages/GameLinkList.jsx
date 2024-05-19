// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import GameLinkItem from "./GameLinkItem";



const GameLinkData = [
	// {id: 1,	name: "SiriusAndTheWeirdLover", link: "https://SunriseStation.github.io/SiriusAndTheLewdestFetishes"},
	{id: 2, name: "StoryOfSisterAndFish", link: "https://SunriseStation.github.io/StoryOfSisterAndFish"},
	{id: 3, name: "SinOfCherryBlossom", link: "https://SunriseStation.github.io/SinOfCherryBlossom"},
	// {id: 4, name: "TheOtherOne", link: "https://SunriseStation.github.io/TheOtherOne"},
	{id: 5, name: "TheMotherAndDaughtersMelon", link: "https://SunriseStation.github.io/TheMotherAndDaughtersMelon"},
];

const gameLinks = GameLinkData.map((game) => {
	return(
		<GameLinkItem
			key={game.id}
			GameName={game.name}
			GameLink={game.link}
		/>
	);
})

function GameLinkList() {

	return(
		<>
			<h2>遊戲列表</h2><br/>
			<ul>
				{gameLinks}
			</ul>
		</>
	);
}



export default GameLinkList;