import { Link } from "react-router-dom";



function GameLinkItem({GameName="unknown", GameLink="unknown", GamePic="unknown"}) {
	
	return(
		<>
			<div className="mt-4">
				<Link className="text-2xl text-white bg-gray-600 border-2 border-blue-200 px-4 py-2 rounded-lg hover:bg-gray-700"
				to={GameLink} /*target="_blank" rel="noopener noreferrer"*/>
					{/* <img src={GamePic}/>
					<br/> */}
					{GameName}
				</Link>
			</div>
			<br/>
		</>
	)
}



export default GameLinkItem;