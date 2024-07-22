import { PodcastEpisode } from "../../types/PodcastEpisode.ts";
import "./PodcastEpisodeTag.css";

export function PodcastEpisodeTag({ episode }) {
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

/*return (
  <div className="podcast-episode">
    <div className="podcast-episode-image">
      <img src={episode.poster} alt={episode.title} />
    </div>
    <div className="podcast-episode-details">
      <h2>{episode.title}</h2>
      <p>Season {episode.episodeSeason}, Episode {episode.episodeNumber}</p>
      <p>{parse(episode.description)}</p>
      <div className="podcast-episode-links">
        <a href={episode.podcastURL} target="_blank" rel="noopener noreferrer">
          Listen to Podcast
        </a>
      </div>
    </div>
  </div>
);
*/
