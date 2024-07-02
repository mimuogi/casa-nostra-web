import { PodcastEpisode } from '../types/PodcastEpisode.ts';
import './PodcastEpisodeTag.css';
import parse from 'html-react-parser'

export function PodcastEpisodeTag(episode: PodcastEpisode) {
  return (
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
}

export default PodcastEpisodeTag;
