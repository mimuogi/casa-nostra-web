import "./App.css";
import { useState, useEffect } from "react";
import { getPodcastEpisodes } from "./scripts/create-podcast-items";
import { PodcastEpisode } from "./types/PodcastEpisode";
import PodcastEpisodeTag from "./components/podcast-episode-tag/podcastEpisodeTag";

function App() {
	const [podcastEpisodes, setPodcastEpisodes] = useState<PodcastEpisode[]>([]);
	const xmlFile = "https://anchor.fm/s/ead1a8e0/podcast/rss";

	useEffect(() => {
		getPodcastEpisodes(xmlFile)
			.then((episodes) => {
				setPodcastEpisodes(episodes);
			})
			.catch((error) => {
				console.error("An error occurred:", error);
			});
	}, []);

	return (
		<>
			<h1>Podcast</h1>
			{podcastEpisodes.map((episode, index) => (
				<PodcastEpisodeTag
					key={index}
					episode={episode}
				/>
			))}
		</>
	);
}

export default App;
