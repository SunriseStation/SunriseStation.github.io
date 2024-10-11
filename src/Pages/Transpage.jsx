import { useEffect, useState } from "react";

import { uploadJson, downloadJson } from "../Tools/FileTransfer";
import { UploadButton, DownloadButton } from "../Components/Button";



/*


v upload

v input text edit

x transform

x output file edit

v download


*/



const rpgmvFormatJson = (jsonData) => {

	var jsonString = JSON.stringify(jsonData)

	// 處理全文的格式換行
	jsonString = jsonString.replace(/({)("autoplayBgm":)/, "$1\n$2")
	jsonString = jsonString.replace(/(,)("data":)/, "$1\n$2")
	jsonString = jsonString.replace(/(,)("events":\[)/, "$1\n$2\n")
	jsonString = jsonString.replace(/("y":[0-9]+})(\])(})/, "$1\n$2\n$3")
	jsonString = jsonString.replace(/(null)(\])(})/, "$1\n$2\n$3")

	// 處理各event的格式換行
	jsonString = jsonString.replace(/(,)(?=\{"id":)/g, "$1\n")
	jsonString = jsonString.replace(/("y":[0-9]+\},)(null)/g, "$1\n$2")
	jsonString = jsonString.replace(/(null,)(?=null)/g, "$1\n")

	return jsonString
}

function createObjectFromString(idKey, value) {
	const keys = idKey.split('.');

	// 定義遞迴函數
	const createNestedObject = (keys, value) => {
		const key = keys[0];
		const nestedValue = keys.length === 1 ? value : createNestedObject(keys.slice(1), value);
		return { [key]: nestedValue };
	};

	// 開始創建嵌套物件
	return createNestedObject(keys, value);
}

function mergeObjects(obj1, obj2) {

	for (let key in obj2) {

		if (obj1.hasOwnProperty(key)) {

			if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {

				mergeObjects(obj1[key], obj2[key]);
			}
		} else {

			obj1[key] = obj2[key];
		}
	}
	return obj1;
}

function createObjectsFromStrings(data) {
	const strings = Object.keys(data);
	const objects = {};
	strings.forEach(str => {
		const nestedObject = createObjectFromString(str, data[str]);
		let currentLevel = objects;
		Object.keys(nestedObject).forEach(key => {
			currentLevel[key] = currentLevel[key] || {};
			currentLevel = currentLevel[key];
			mergeObjects(currentLevel, nestedObject[key]);
		});
	});
	return objects;
}

const localeFormatJson = (jsonData) => {

	const newJsonData = createObjectsFromStrings(jsonData);

	/*
	Object.keys(jsonData).map(idKey => {

		const keys = idKey.split('.');
		// const lastKey = keys.pop();
		const text = jsonData[idKey];

		const createNestedObject = (keys, value) => {
			const key = keys[0];
			const nestedValue = keys.length === 1 ? value : createNestedObject(keys.slice(1), value);
			return { [key]: nestedValue };
		};

		createNestedObject(keys, text);

		let dataRef = newJsonData;
		keys.map(key => {
			dataRef[key] = {};
		})
		// dataRef
		// newJsonData;
	})
	*/
	

	console.log(jsonData);
	
	let jsonString = JSON.stringify(newJsonData, null, 2);

	return jsonString;
}

function Transpage() {
	
    const [inputJson, setInputJson] = useState({})
    const [inputJsonStr, setInputJsonStr] = useState("")
    const [outputJson, setOutputJson] = useState({})
	const [idMap, setIdMap] = useState({})

	// input box event
	const handleInputChange = e => {

		const content = e.target.value
		setInputJsonStr(content)
	}
	
	// upload event
	const handleUpload = e => {

		uploadJson(e, data => {
			
			setInputJson(data)
			setInputJsonStr(rpgmvFormatJson(data))
		})
	}

	// download event
	const handleDownload = () => {

		if(outputJson) {

			downloadJson(outputJson, "Map000", rpgmvFormatJson)
			downloadJson(idMap, "locale", localeFormatJson)
		}
	}

	const updateJson = () => {

		var updatable = true
		try {

			var jsonData = JSON.parse(inputJsonStr)
		}
		catch {

			updatable = false
		}

		// console.log(jsonData)
		// console.log(updatable)
		if(updatable) setInputJson(jsonData)
	}

	// 如果 inputJsonStr 有變化就執行
	useEffect(() => {

		if(inputJsonStr) {

			updateJson()
		}

	}, [inputJsonStr])

	// 如果 inputJson 有變化就執行
	useEffect(() => {

		if(inputJson) {

			transformData()
		}

	}, [inputJson])

    const transformData = () => {

        try {

			if(inputJson === null) return

			// Clone inputJson
            const data = JSON.parse(JSON.stringify(inputJson))
            
            // Process elements with code: 401(text), code: 102(choice)
    		const changeMapping_ = {}
    		var changeMapping = {}
            data.events.forEach((event, eventId) => {

                if(event === null) return

                event.pages.forEach((page, pageIndex) => {

					page.list.forEach((action, actionIndex) => {

						const isVaildStr = string => {

							if(string.length === 0) {

								return false
							}

							return true
						}

						const isAlter = string => {

							if(string.length < 3) {

								// console.log(`"${string} less 4"`)
								return false
							}
							else if(string[0] === '#') {

								// console.log(`"${string} with #"`)
								return true
							}
							else if(string[1] === '{') {

								// console.log(`"${string} with {"`)
								return true
							}
							else if(string[string.length-1] === '}') {

								// console.log(`"${string} with }"`)
								return true
							}

							return false
						}

						const insertNestedJson = (data, newValue, path) => {
			
							if(path.length == 0) return newValue
							
							const newData = {...data}
							if(newData[path[0]] === null) newData[path[0]] = {}

							newData[path[0]] = insertNestedJson(newData[path[0]], newValue, path.slice(1))
							
							return newData
						}



						if(action.code === 401) {
							// code 401: text
							
							const text = action.parameters[0]
							if(!isVaildStr(text)) return

							const idKey = `${eventId}.${pageIndex}.${actionIndex}`

							const originText = text
							const alterText = isAlter(text) ? text : idKey

							changeMapping_[idKey] = {
								original: originText,
								alter: alterText,
							}
							const data = { original: originText, alter: alterText }
							changeMapping = insertNestedJson(changeMapping, data, idKey.split('.'))

							action.parameters[0] = `#{${idKey}}`
                        }
						else if(action.code === 102) {
							// code 102: choice
							// {"code":102,"indent":0,"parameters":[["en(v[1]>29)浄化♡","無視する"],1,0,2,0]}

							const choices = action.parameters[0].map((text, textIndex) => {
								
								if(!isVaildStr(text)) return

								const idKey = `${eventId}.${pageIndex}.${actionIndex}.${textIndex}`

								const originText = text
								const alterText = isAlter(text) ? text : idKey

								changeMapping_[idKey] = {
									original: originText,
									alter: alterText,
								}
								const data = { original: originText, alter: alterText }
								changeMapping = insertNestedJson(changeMapping, data, idKey.split('.'))

								return `#{${idKey}}`
							})
							
							action.parameters[0] = choices
						}
						
						// console.log(action.parameters[0])
                    })
                })
            })
            // console.log(data)
            // console.log(changeMapping)
            console.log(changeMapping)
        
            // Convert Set to Array
            // const uniqueIds = Array.from(idMap)
			setOutputJson(data)
			setIdMap(changeMapping_)
        }
        catch(error) {

            console.error("Error parsing JSON: ", error)
			setIdMap({})
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     transformData();
    // };

	const handleParameterChange = (eventKey, newValue) => {
		const newIdMap = {...idMap, [eventKey]: {...idMap[eventKey], alter: newValue}};
		setIdMap(newIdMap);
		
		// Update outputJson with edited parameters
		const updatedJson = JSON.parse(JSON.stringify(outputJson));
		const keys = eventKey.split(".");
		const eventIndex = parseInt(keys[0], 10);
		const pageIndex = parseInt(keys[1], 10);
		const actionIndex = parseInt(keys[2], 10);
		
		updatedJson.events[eventIndex].pages[pageIndex].list[actionIndex].parameters[0] = `#{${newValue}}`;
		
		setOutputJson(updatedJson);
	};
	// const displayText = "text";

    return (
        <div className="container mx-auto text-white">
		
        <h1 className="text-2xl font-bold my-4">Unique IDs from JSON Data</h1>

        {/* <form onSubmit={handleSubmit} className="my-4"> */}
			複製Map.json
            <textarea
				className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Paste Map.json here"
				rows="10"
				value={inputJsonStr}
				onChange={handleInputChange}
            ></textarea>
			
			或
            <label className="block mb-2">
				{<UploadButton
					displayText="上傳"
					accept=".json"
					onChange={handleUpload}
				/>}
			</label>

            {/* <button type="submit" className="button mt-[1%]">
            	轉換
            </button> */}
        {/* </form> */}
		

		{Object.keys(idMap).length > 0 && outputJson && (
			<div className="w-full h-screen mt-[2%]">
			
			<div className="justify-between flex items-start w-full h-[80%]">
			
			{Object.keys(idMap).length > 0 && (
				<div className="w-[48%] h-full overflow-y-auto overflow-x-hidden p-2 bg-slate-500">
					<h2>Mapping of Changes:</h2>
					<table>
						<thead>
							<tr>
								<th>Original Text</th>
								<th>Alter Text</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(idMap).map(key => (
								<tr key={key}>
									<td className="w-[45%]">{idMap[key].original}</td>
									<td><input
										className="text-black w-full rounded-md"
										type="text"
										value={idMap[key].alter}
										onChange={(e) => handleParameterChange(key, e.target.value)}
									/></td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}

			{outputJson && (
				<div className="w-[48%] h-full overflow-y-auto overflow-x-hidden p-2 bg-slate-500">
					<h2>Modified JSON:</h2>
					<pre className="whitespace-pre-line break-all">{rpgmvFormatJson(outputJson)}</pre>
				</div>
			)}

			</div>
			
			<div className="mt-[1%]">
				{<DownloadButton displayText="下載" onClick={handleDownload}/>}
			</div>

			</div>
		)}

        </div>
    );
}



export default Transpage;