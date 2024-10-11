import React, { useState, useEffect } from "react";

import { uploadJson, downloadJson } from "../Tools/FileTransfer";
import { UploadButton, DownloadButton } from "../Components/Button";



/*


v upload

O auto translate

v edit

v download


*/



// 遞迴跑過JSON下所有元素
const traverseJson = async (data, method, path = []) => {

	if(typeof data === "string") {

		const translation = await method(data, path)
		return translation
	}
	else if(typeof data === "object" && data !== null) {

		const translation = {}
		for (const key in data) {

			translation[key] = await traverseJson(data[key], method, [...path, key]) //跑所有元素，遞迴下去
		}
		
		return translation
	}
	else {

		return data
	}
}

// 翻譯 API
// https://cloud.google.com/translate/docs/reference/libraries/v2/nodejs
const translator = async (text) => {
	
	return "template"
	// 未確認
	const apiKey = "apiKey"
	const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			q: text,
			target: "en", //設定要翻成什麼語言
		}),
	})
	const data = await response.json()
	return data.data.translations[0].translatedText
}

const Texteditpage = () => {
	
	const [originalData, setOriginalData] = useState({})
	const [translatedData, setTranslatedData] = useState({})
	const [translationPairs, setTranslationPairs] = useState([])

	// upload event
	const handleUpload = e => {

		uploadJson(e, setOriginalData)
	}

	// download event
	const handleDownload = () => {

		downloadJson(translatedData, "locale_", data => JSON.stringify(data, null, 2))
	}

	// type-in event
	const handleTranslationEdit = (index, newContent) => {

		const newTranslationPairs = translationPairs.map((pair, i) => {

			if(i === index) return {...pair, translated: newContent}
			else return pair
		})
		
		setTranslationPairs(newTranslationPairs)
		// console.log(translationPairs)

		updateTranslation(newContent, translationPairs[index].path)
		// console.log(translatedData)
	}

	// translation init
	const initTranslation = async () => {
		
		const translation = await traverseJson(originalData, async (text, path) => {
			
			const key = path[path.length-1]
			const isComment = key.length >= 2 && key[0] === '/' && key[1] === '/'

			const translation = isComment ? text : await translator(text)
			translationPairs.push({ original: text, translated: translation, path: path })

			return translation
		})
		setTranslatedData(translation)
	}

	// translation update
	const updateTranslation = (text, path) => {
		
		const editNestedJson = (data, newValue, path) => {
			
			if(path.length == 0) return newValue
			
			const newData = {...data}
			newData[path[0]] = editNestedJson(newData[path[0]], newValue, path.slice(1))
			
			return newData
		}
		
		var newData = editNestedJson(translatedData, text, path)
		// console.log(translatedData)
		// console.log(newData)
		setTranslatedData(newData)
	}

	// 如果 originalData 有變化就執行
	useEffect(() => {

		if(originalData) {

			initTranslation()
		}

	}, [originalData])

	// page layout
	return (
		<div className="p-6 min-h-screen w-full col-content-box-2">

			{/* Buttons */}
			<div className="row-content-box-5 w-full">
				{<UploadButton
					displayText="上傳"
					accept=".json"
					onChange={handleUpload}
				/>}
				<div className="w-[30%]"/>
				{<DownloadButton
					displayText="下載"
					onClick={handleDownload}
				/>}
			</div>

			{/* Json data display */}
			<div className="grid grid-cols-2 gap-4 mt-4 col-content-box-2 min-w-[50%] max-w-[80%]">
				<div className="p-4 bg-gray-400 shadow rounded-md col-content-box-2 w-full">
					{/* <h2>Mapping of Changes:</h2> */}
					<h2 className="text-lg font-bold mb-2">翻譯編輯</h2>
					<table className="w-full">
						<thead>
							<tr className="grid grid-cols-11 gap-4">
								<th className="col-start-2 col-span-3 bg-slate-500 py-6">原文：</th>
								<th className="col-end-11 col-span-3 bg-slate-500 py-6">譯文</th>
							</tr>
						</thead>
						<tbody className="whitespace-pre-wrap overflow-auto max-h-96">
							{translatedData ? (
								<>
									{translationPairs.map((pair, index) => (
										<tr className="grid grid-cols-11 gap-4" key={index}>
											<td className="col-start-2 col-span-3 bg-slate-300 mt-1 py-1"><strong>{pair.original}</strong></td>
											<td className="col-end-11 col-span-3 bg-slate-300 mt-1 py-1">
												<input
													className="text-black w-full rounded-md"
													type="text"
													value={pair.translated}
													onChange={(e) => handleTranslationEdit(index, e.target.value)}
												/>
											</td>
										</tr>
									))}
								</>
							) : (
								<tr className="grid grid-cols-5 gap-4" ><td className="col-start-3 col-span-1 col-content-box-2">尚無資料</td></tr>
							)}
						</tbody>
					</table>
				</div>
			</div>

		</div>
	)
}



export default Texteditpage;