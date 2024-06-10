import GameLinkItem from "./GameLinkItem";
import GameData from "../Data/Games";



const gameLinks = GameData.map((game) => {

	return(
		<GameLinkItem
			key={game.id}
			GameName={game.title}
			GameLink={game.link}
		/>
	);
})

function GameLinkList() {

	return(
		<>
			<h2 className="text-blue-100 font-bold text-xl">遊戲列表</h2>
			<br/>
			<div className="ml-2">
				{gameLinks}
			</div>
		</>
	);
}



export default GameLinkList;