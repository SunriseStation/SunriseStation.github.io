import { Outlet } from "react-router-dom";

import FileEditor from "../Components/FileEditor";



function Gamepage() {
    return(
        <>
            <div className="w-full col-content-box-2">
                {/* Main Game Area */}
                <main id="game-aria">
                    
                    <div className="main-container">
                        <Outlet/>
                    </div>
                </main>
                
                {<FileEditor/>}
            </div>


            {/* Comments Section */}
            <section className="w-4/5 max-w-4xl bg-black border border-gray-300 rounded-lg mt-8 p-6 shadow-lg">
                <h2 className="text-xl font-bold text-center text-gray-800">評論區</h2>
                <div className="mt-4">
                    {/* <div className="border-b border-gray-300 py-4">
                        <p><strong>用戶1:</strong> 這個遊戲真有趣！</p>
                    </div>
                    <div className="border-b border-gray-300 py-4">
                        <p><strong>用戶2:</strong> 音樂搭配得很好。</p>
                    </div> */}
                    {/* 你可以添加更多評論 */}
                </div>
            </section>
        </>
    );
}



export default Gamepage;