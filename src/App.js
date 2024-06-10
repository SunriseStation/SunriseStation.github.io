// import { useState } from "react";
// eslint-disable-next-line
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Testpage from "./Pages/Testpage";
import Mainpage from "./Pages/Mainpage";
import Gamepage from "./Pages/Gamepage";
import EmbedGame from "./Components/EmbedGame";

import './style.css';

function App() {
	return(
		<HashRouter>
		<Routes>
			<Route path="/" element={<Layout/>}>

				<Route path="*" element={<h1 className="mt-32 text-white text-8xl">Error 404: Not Found</h1>}/>

				<Route path="/" element={<Mainpage/>}/>
				<Route path="/games" element={<Gamepage/>}>
				  {/* <Route path="/games/*" element={<div className="main-container"><iframe className="iframe-game" src="" title="Game"></iframe></div>}/> */}
				  <Route path="/games/*" element={<EmbedGame/>}/>

				  <Route path="/games/" element={<EmbedGame GameLink=""/>}/>
          <Route
            path="/games/StoryOfSisterAndFish"
            element={<EmbedGame GameLink="https://SunriseStation.github.io/StoryOfSisterAndFish"/>}
          />
          <Route
            path="/games/MagicalBlueStar"
            element={<EmbedGame GameLink="https://SunriseStation.github.io/MagicalBlueStar"/>}
          />
          <Route
            path="/games/SinOfCherryBlossom"
            element={<EmbedGame GameLink="https://SunriseStation.github.io/SinOfCherryBlossom"/>}
          />
          <Route
            path="/games/TheMotherAndDaughtersMelon"
            element={<EmbedGame GameLink="https://SunriseStation.github.io/TheMotherAndDaughtersMelon"/>}
          />
        </Route>
				<Route path="/password" element={<Testpage/>}/>
        {/* {<GameLinkRouter/>} */}
			</Route>
		</Routes>
		</HashRouter>
	);
}



export default App;

/*


import React from 'react';

const GameLinks = () => {
  // 將遊戲連結和對應的圖片存放在一個物件中
  const games = [
    {
      name: '遊戲1',
      imageUrl: 'game1.jpg',
      link: 'https://example.com/game1',
    },
    {
      name: '遊戲2',
      imageUrl: 'game2.jpg',
      link: 'https://example.com/game2',
    },
    // 添加更多遊戲...
  ];

  return (
    <div className="game-links">
      {games.map((game, index) => (
        <a key={index} href={game.link} target="_blank" rel="noopener noreferrer">
          <img src={game.imageUrl} alt={game.name} />
        </a>
      ))}
    </div>
  );
};

export default GameLinks;



import React from 'react';
import './App.css';
import GameLinks from './GameLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>歡迎來到我的小遊戲頁面</h1>
        <GameLinks />
      </header>
    </div>
  );
}

export default App;



import React from 'react';

const GameLinks = () => {
  const games = [
    {
      name: '遊戲1',
      imageUrl: 'game1.jpg',
      link: 'https://example.com/game1',
    },
    {
      name: '遊戲2',
      imageUrl: 'game2.jpg',
      link: 'https://example.com/game2',
    },
    // 添加更多遊戲...
  ];

  return (
    <div className="game-links">
      {games.map((game, index) => (
        <a key={index} href={game.link} target="_blank" rel="noopener noreferrer">
          <img src={game.imageUrl} alt={game.name} />
        </a>
      ))}
    </div>
  );
};

export default GameLinks;




// Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>歡迎來到我的小遊戲頁面</h2>
    </div>
  );
};

export default Home;



// Game1.js
import React from 'react';

const Game1 = () => {
  return (
    <div>
      <h2>遊戲1</h2>
      {/* Add your game content here }
    </div>
  );
};

export default Game1;




// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Game1 from './Game1';
import GameLinks from './GameLinks';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/game1" component={Game1} />
            {/* Add more routes for other games }
          </Switch>
          <GameLinks />
        </header>
      </div>
    </Router>
  );
}

export default App;




import React from 'react';

const Game1 = () => {
  return (
    <div>
      <h2>遊戲1</h2>
      <iframe
        title="RPG Maker MV Game"
        src={`${process.env.PUBLIC_URL}/rpg_game/index.html`}
        width="800"
        height="600"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Game1;









import React from 'react';
import './Game1.css'; // 新增的CSS文件

const Game1 = () => {
  return (
    <div className="game1-container">
      <header className="game1-header">
        <h1>遊戲1</h1>
      </header>
      <div className="game1-content">
        <div className="game1-play-area">
          {/* 嵌入RPG Maker MV遊戲 }
          <iframe
            title="RPG Maker MV Game"
            src={`${process.env.PUBLIC_URL}/rpg_game/index.html`}
            width="800"
            height="600"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="game1-music-player">
          {/* 添加播放背景音樂的組件 }
          {/* 在這裡添加音樂播放器組件 }
        </div>
      </div>
    </div>
  );
};

export default Game1;



.game1-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game1-header {
  background-color: #333;
  color: white;
  padding: 20px;
  width: 100%;
  text-align: center;
}

.game1-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  margin-top: 20px;
}

.game1-play-area {
  flex: 0 0 70%; /* 調整遊玩區域的寬度 
  margin-right: 20px;
}

.game1-music-player {
  flex: 0 0 25%; /* 調整音樂播放器的寬度 
}





// Game1.js

import React from 'react';

const Game1 = () => {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-gray-800 text-white py-4 w-full text-center">
        <h1 className="text-2xl">遊戲1</h1>
      </header>
      <div className="flex justify-between items-start w-11/12 mt-8">
        <div className="flex-grow mr-8">
          {/* 嵌入RPG Maker MV遊戲 }
          <iframe
            title="RPG Maker MV Game"
            src={`${process.env.PUBLIC_URL}/rpg_game/index.html`}
            width="800"
            height="600"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/4">
          {/* 添加播放背景音樂的組件 }
          {/* 在這裡添加音樂播放器組件 }
        </div>
      </div>
    </div>
  );
};

export default Game1;






*/