/*import React from 'react';

const test = () => {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-gray-800 text-white py-4 w-full text-center">
        <h1 className="text-2xl">遊戲1</h1>
      </header>
      <div className="flex justify-between items-start w-11/12 mt-8">
        <div className="w-4/5 mr-8">
          {/* 嵌入RPG Maker MV遊戲 }
          <iframe   
            title="RPG Maker MV Game"
            src={`https://sunrisestation.github.io/SinOfCherryBlossom/`}
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

export default test;
*/

import React from 'react';
import './game1.css'; // 新增的CSS文件

const Game1 = () => {
  return (
    <div className="game1-container">
      <header className="game1-header">
        <h1>遊戲1</h1>
      </header>
      <div className="game1-content">
        <div className="game1-play-area">
          {/* 嵌入RPG Maker MV遊戲 */}
          <iframe
            title="RPG Maker MV Game"
            src={`https://sunrisestation.github.io/SinOfCherryBlossom/`}
            width="800"
            height="600"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="game1-music-player">
          {/* 添加播放背景音樂的組件 */}
          {/* 在這裡添加音樂播放器組件 */}
        </div>
      </div>
    </div>
  );
};

export default Game1;



/*



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
