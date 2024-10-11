
/*


v upload

v download


*/



// 上傳
const uploadJson = (e, method) => {

	const file = e.target.files[0]
	if(!file) {

        console.warn("No file selected")
        return
    }
    if(!(file instanceof Blob)) {

        console.warn("Selected file is not a Blob")
        return
    }
	const isJsonFile = file.name.endsWith(".json")
	if(!isJsonFile) {

		console.warn("Uploaded content in not json:", file.name)
		return
	}

	const reader = new FileReader()
	
	reader.onload = (e) => {

		const jsonData = JSON.parse(e.target.result)
		method(jsonData)
	}
	
	reader.readAsText(file)
}

// 下載
const downloadJson = (jsonData, jsonName = "downloadedJson", format) => {

	const fileName = jsonName
	const fileExt = ".json"
	
	// create file in browser
	const data = jsonData
	const json = format(data)
	const blob = new Blob([json], { type: "application/json" })
	const url = URL.createObjectURL(blob)
	
	// create "a" HTLM element with href to file
	const link = document.createElement("a")
	link.href = url
	link.download = fileName + fileExt
	document.body.appendChild(link)
	link.click()

	// clean up "a" element & remove ObjectURL
	document.body.removeChild(link)
	URL.revokeObjectURL(url)
}




export { uploadJson, downloadJson };