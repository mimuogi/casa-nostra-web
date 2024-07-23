import React, { useEffect, useState } from "react";
import "./pages.css";
import { Layout } from "../components/layout/layout";
import PodcastEpisodeTag from "../components/podcast-episode-tag/podcastEpisodeTag";
import { getPodcastEpisodes } from "../scripts/create-podcast-items";
import { PodcastEpisode } from "../types/PodcastEpisode";

export function PodcastPage() {
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
		<div>
			<Layout>
				<h1>Podcast</h1>
				{podcastEpisodes.map((episode, index) => (
					<PodcastEpisodeTag
						key={index}
						episode={episode}
					/>
				))}
			</Layout>
		</div>
	);
}
