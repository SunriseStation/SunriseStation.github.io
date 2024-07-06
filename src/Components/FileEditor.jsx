// import React, { useState, useRef, useContext } from "react";
import React, { useState, useRef } from "react";
import LZString from "lz-string";
import { UploadButton, DownloadButton } from "../Components/Button";

// import { FiUpload } from "react-icons/fi";

// import AuthContext from "../../Store/AuthContext";



//const [state, setState] = useState("default value");
// state: 為此 Function Component 的狀態(變數)
// setState: 設定 state 的函式
// useState: 為 React Hook，類似建立 state 和 setState
function UploadFile() {
    const counterRef = useRef(null);
    const [counterState, setCounterState] = useState(null);

    function handleCounterChange(e) {
        setCounterState(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // avoid execute default action

        const count = counterRef.current.value;
    }

    // https://ithelp.ithome.com.tw/questions/10199745
    // https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
    // https://blog.marsen.me/2023/01/29/2023/String.stringtify/
    // https://stackoverflow.com/questions/55613438/reactwrite-to-json-file-or-export-download-no-server

    // 處理下載存檔
    const handleDownload = () => {
        // 模擬下載動作
        // https://molly1024.medium.com/%E5%A6%82%E4%BD%95%E5%9C%A8react%E5%B0%88%E6%A1%88%E4%B8%AD%E4%BD%BF%E7%94%A8lzstring-how-to-use-lzstring-in-react-project-b55223a1a237
        // var data = LZString.compressToBase64(json);
        // https://stackoverflow.com/questions/76570765/how-to-pass-data-into-iframe-in-react
        const data = { /* 存檔數據 */
            player: {
              name: "玩家名稱",
              level: 10,
              inventory: ["劍", "盾", "治療藥水"]
            },
            progress: {
              stage: 3,
              score: 5000
            }
        };
        // DataManager.makeSaveContents
        // DataManager.extractSaveContents()
        
        // create file in browser
        const fileName = "savefile";
        const fileExt = ".rpgsave";
        const json = JSON.stringify(data);
        // const json = JSON.stringify(data, null, 2); // for easy read json
        // const blob = new Blob([json], { type: "application/json" });
        var test = LZString.compressToBase64(json);
        console.log(test);
        const blob = new Blob([test], { type: 'text/plain' });
        const href = URL.createObjectURL(blob);
        
        // create "a" HTLM element with href to file
        const link = document.createElement("a");
        link.href = href;
        link.download = fileName + fileExt;
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    };

    // 處理上傳存檔
    const handleUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
        const text = e.target.result;
        const data = JSON.parse(text);
        // 處理上傳的數據
        console.log("Uploaded save data:", data);
        };
        reader.readAsText(file);
    };

    return (
        <div className="button-container mt-[2%]">
			{<DownloadButton
				displayText="下載存檔"
				onClick={handleDownload}
			/>}
			{<UploadButton
				displayText="上傳存檔"
				onChange={handleUpload}
			/>}
        </div>
    )
}



export default UploadFile;