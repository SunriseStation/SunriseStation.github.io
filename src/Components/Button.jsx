


function UploadButton({ displayText, accept, onChange }) {

    return (
		<label className="button cursor-pointer">
			<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
				<path fill="#444" d="M11 10v2h-6v-2h-5v6h16v-6h-5zM4 14h-2v-2h2v2z"/>
				<path fill="#444" d="M13 5l-5-5-5 5h3v6h4v-6z"/>
			</svg>
			{displayText}
			<input
				type="file"
				accept={accept}
				onChange={onChange}
				style={{ display: "none" }}
			/>
		</label>
    );
}

function DownloadButton({ displayText, onClick }) {

    return (
        <button className="button" onClick={onClick}>
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill="#444" d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"></path>
                <path fill="#444" d="M10 6v-6h-4v6h-3l5 5 5-5z"></path>
            </svg>
            <span>{displayText}</span>
        </button>
    );
}



export { DownloadButton, UploadButton };