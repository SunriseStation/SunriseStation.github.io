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
          test
          test
          test
          test
          test
          test
          test
          test
          test
          test
          test
          test
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
          test
          test
          test
          test
          test
          test
          test
          test
          test
          test
          test
          test
          {/* 在這裡添加音樂播放器組件 */}
        </div>
      </div>
    </div>
  );
};

export default Game1;
