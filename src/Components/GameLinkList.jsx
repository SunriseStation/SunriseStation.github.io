import GameLinkItem from "./GameLinkItem";
import GameData from "../Data/Games";



function GameLinkList() {

	const gameLinks = GameData.map((game) => {
		

		return(
			<GameLinkItem
				key={game.id}
				GameName={game.title}
				GameLink={game.page}
			/>
		);
	})

	return(
		<>
			<h2 className="text-blue-100 font-bold text-xl">遊戲列表</h2>
			<br/>
			<div className="ml-2 text-blue-100">
				{/* 嵌入好像有點問題:/<br/>
				先收著<br/> */}
				{gameLinks}
			</div>
		</>
	);
}



export default GameLinkList;