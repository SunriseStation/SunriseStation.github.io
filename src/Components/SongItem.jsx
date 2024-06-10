


function SongItem({SongName="unknown", SongLink="unknown", SongAutoplay=false}) {
	SongLink += "&autoplay=" + (SongAutoplay ? "1" : "0") + "&loop=1&controls=0&disablekb=1";

	return(
		<>
			<div className="embed-hidder">
			<div className="youtube-container">
				<iframe
					className="iframe-youtube"
					src={SongLink} title={SongName}
					allow="autoplay; encrypted-media"
					referrerPolicy="strict-origin-when-cross-origin"
				></iframe>
			</div>
			</div>
		</>
	)
}



export default SongItem;