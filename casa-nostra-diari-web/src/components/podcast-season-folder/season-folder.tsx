import React, { useEffect, useState } from "react";
import "./season-folder.css";
import PodcastEpisodeTag from "../podcast-episode-tag/podcastEpisodeTag";
import { getPodcastEpisodes } from "../../scripts/create-podcast-items";
import { PodcastEpisode } from "../../types/PodcastEpisode";

export function SeasonFolder({ seasonTitle }) {
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

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='season-folder'>
			<div
				className='season-header'
				onClick={toggleOpen}>
				<h3>Temporada {seasonTitle}</h3>
				<button className='toggle-button'>{isOpen ? "−" : "+"}</button>
			</div>
			<div className={`season-episodes ${isOpen ? "open" : "closed"}`}>
				{podcastEpisodes.map((episode) => (
					<PodcastEpisodeTag
						key={episode.episodeNumber}
						episode={episode}
					/>
				))}
			</div>
		</div>
	);
}
