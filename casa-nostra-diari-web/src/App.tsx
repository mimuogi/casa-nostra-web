import './App.css'
import { useState, useEffect } from 'react';
import { getPodcastEpisodes } from './scripts/create-podcast-items';
import { PodcastEpisode } from './types/PodcastEpisode';


function App() {
    const [podcastEpisodes, setPodcastEpisodes] = useState<PodcastEpisode[]>([]);
    const xmlFile = 'https://anchor.fm/s/ead1a8e0/podcast/rss'; 

    useEffect(() => {
        getPodcastEpisodes(xmlFile)
            .then((episodes) => {
                setPodcastEpisodes(episodes);
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });
    }, []); 

    return (
        <>
            <h1>Diari Digital</h1>
            {podcastEpisodes.map((episode, index) => (
                <div key={index}>
                    <h2>{episode.title}</h2>
                    <p>{episode.description}</p>
                    <img src={episode.poster} alt={episode.title} />
                </div>
            ))}
        </>
    );
}

export default App;
