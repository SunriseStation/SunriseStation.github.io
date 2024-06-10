import SongItem from "./SongItem";



const SongData = [
	{
		id: 1,
		name: "夜の向日葵",
		link: "https://www.youtube-nocookie.com/embed/s7nw8ySOprI?playlist=s7nw8ySOprI",
		autoplay: false
	},
	{
		id: 2,
		name: "エロゲソングonピアノ",
		link: "https://www.youtube-nocookie.com/embed/DlNhPOObCic?playlist=DlNhPOObCic",
		autoplay: true
	},
];

function SongList() {
	const songs = SongData.map((song) => {
		return(
			<SongItem
				key={song.id}
				SongName={song.name}
				SongLink={song.link}
				SongAutoplay={song.autoplay}
			/>
		);
	});

	return(
		<>
			{songs}
		</>
	);
}



export default SongList;