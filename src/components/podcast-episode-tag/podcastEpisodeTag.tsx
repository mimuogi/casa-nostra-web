import { PodcastEpisode } from "../../types/PodcastEpisode";
import "./PodcastEpisodeTag.css";

export function PodcastEpisodeTag({ episode }: { episode: PodcastEpisode }) {
	const trimedTitle = episode.title.split("|")[0].trim();

	return (
		<div className='podcast-episode'>
			<div className='podcast-episode-image'>
				<img
					src={episode.poster}
					alt={episode.title}
				/>
			</div>
			<div className='podcast-episode-details'>
				<strong>{trimedTitle}</strong>
				<p>
					Temporada {episode.episodeSeason}, Episodi {episode.episodeNumber}
				</p>
				<div className='podcast-episode-links'>
					<audio controls>
						<source
							src={episode.audioSource}
							type='audio/mpeg'
						/>
						Your browser does not support the audio element.
					</audio>
				</div>
			</div>
		</div>
	);
}

export default PodcastEpisodeTag;
