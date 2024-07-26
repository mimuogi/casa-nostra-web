import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { HeaderCN } from "../cn-header/cn-header";
import { FooterCN } from "../cn-footer/cn-footer";
import { CNNavigationBar } from "../cn-nav-bar/cn-nav-bar";
import { SeasonFolder } from "../podcast-season-folder/season-folder";
import { getPodcastEpisodes } from "../../scripts/create-podcast-items";
import { PodcastEpisode } from "../../types/PodcastEpisode";
import "./layout.css";

export function Layout() {
	const [episodesBySeason, setEpisodesBySeason] = useState<
		Record<string, PodcastEpisode[]>
	>({});
	const xmlFile = "https://anchor.fm/s/ead1a8e0/podcast/rss";

	useEffect(() => {
		getPodcastEpisodes(xmlFile)
			.then((episodes) => {
				const groupedEpisodes: Record<string, PodcastEpisode[]> = {};

				episodes.forEach((episode) => {
					let season = "";
					if (episode.episodeSeason === 0) {
						season = "Presentació";
					} else {
						season = episode.episodeSeason.toString();
					}

					if (!groupedEpisodes[season]) {
						groupedEpisodes[season] = [];
					}
					groupedEpisodes[season].push(episode);
				});

				setEpisodesBySeason(groupedEpisodes);
			})
			.catch((error) => {
				console.error("Algo va malament..:", error);
			});
	}, []);

	return (
		<div className='layout'>
			<HeaderCN />
			<CNNavigationBar />
			<div className='main-layout'>
				<main className='main-column'>
					<Outlet /> {/* Renders the nested route components */}
				</main>
				<aside className='sidebar'>
					{Object.keys(episodesBySeason).map((season) => (
						<SeasonFolder
							key={season}
							seasonTitle={season}
							episodes={episodesBySeason[season]}
						/>
					))}
				</aside>
			</div>
			<FooterCN />
		</div>
	);
}
