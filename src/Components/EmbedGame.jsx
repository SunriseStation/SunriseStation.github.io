


function EmbedGame({GameLink="unknown"}) {
    if(GameLink === "unknown") return(
        <div className="main-container">
            <div className="iframe-game col-content-box-5 text-8xl text-blue-100">
                Unknown Game
            </div>
        </div>
    );

    return(
        <div className="main-container">
            <iframe
                className="iframe-game"
                src={GameLink}
                title="Game"
            ></iframe>
        </div>
    );
}



export default EmbedGame;