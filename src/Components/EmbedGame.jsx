import { useParams } from "react-router-dom";

import GameData from "../Data/Games";



function EmbedGame() {

    let params = useParams();
    console.log(params.gamename);

    if(params.gamename === undefined) {
        return(
            <iframe
                className="iframe-game"
                src=""
                title="Game"
            ></iframe>
        );
    }
    
    let Game = GameData.find(x => x.name === params.gamename);
    if(Game !== undefined) console.log(Game.name);
    else console.log("unknown");
    
    if(Game === undefined) return(
        <div className="iframe-game col-content-box-5 text-8xl text-blue-100">
            Unknown Game
        </div>
    );

    return(
        <iframe
            className="iframe-game"
            src={Game.link}
            title="Game"
        ></iframe>
    );
}



export default EmbedGame;