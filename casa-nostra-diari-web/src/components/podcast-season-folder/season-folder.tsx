import { useState } from "react";
import "./season-folder.css";
import PodcastEpisodeTag from "../podcast-episode-tag/podcastEpisodeTag";
import { PodcastEpisode } from "../../types/PodcastEpisode";

interface SeasonFolderProps {
	seasonTitle: string;
	episodes: PodcastEpisode[];
}

export function SeasonFolder({ seasonTitle, episodes }: SeasonFolderProps) {
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
				{episodes.map((episode) => (
					<PodcastEpisodeTag
						key={episode.episodeNumber}
						episode={episode}
					/>
				))}
			</div>
		</div>
	);
}
