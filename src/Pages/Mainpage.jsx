import { Link } from "react-router-dom";

import GameLinkList from "../Components/GameLinkList";
import SongList from "../Components/SongList";
import Ilya from "../img/Ilya.jpg";



function Mainpage() {
    return(
        <>
            <div className="w-full row-content-box-2">
                <div id="left-side">
                    <div className="ml-4">
                        <header className="text-blue-100">
                            <h2 className="font-black text-2xl">注意！</h2>
                            <div className="ml-4">
                                以下內容含有十八禁成分<br/>
                                出現人物皆為成年<br/>
                                遊戲內容皆為演出<br/>
                                與現實生活無關<br/>
                                <br/>
                                部分遊戲可能含有令人不適之內容<br/>
                                請注意遊玩<br/>
                            </div>
                        </header><br/>
                    </div>
                    <div className="w-full col-content-box-2">
                        <img src={Ilya} alt=""/>
                    </div>

                    <div className="my-6 w-full h-px col-content-box-2">
                        <div className="bg-black h-full w-full"></div>
                    </div>

                    <div className="ml-4">
                        {<GameLinkList/>}
                    </div>
                    {/* <Link to="/">小說區(無)</Link><br/> */}
                    {/* <Link to="/">其它</Link><br/> */}
                </div>
                
                <div id="right-side">
                    {<SongList/>}
                </div>
            </div>
        </>
    );
}



export default Mainpage;