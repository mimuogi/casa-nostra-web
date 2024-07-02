import { PodcastEpisode } from "../types/PodcastEpisode";

export function getPodcastEpisodes(xmlFile: string): Promise<PodcastEpisode[]> {
    return new Promise((resolve, reject) => {
        fetch(xmlFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                try {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(data, "text/xml");

                    const items = xmlDoc.getElementsByTagName("item");
                    const episodes : PodcastEpisode[] = Array.from(items).map((item) => {
                        const titleElement = item.getElementsByTagName("title")[0];
                        const linkElement = item.getElementsByTagName("link")[0];
                        const dateElement = item.getElementsByTagName("pubDate")[0];
                        const durationElement = item.getElementsByTagName("itunes:duration")[0];
                        const seasonElement = item.getElementsByTagName("itunes:season")[0];
                        const episodeElement = item.getElementsByTagName("itunes:episode")[0];
                        const descriptionElement = item.getElementsByTagName("description")[0];
                        const imageElement = item.getElementsByTagName("itunes:image")[0];
                        const typeElement = item.getElementsByTagName("itunes:episodeType")[0];

                        const title: string = titleElement ? titleElement.textContent || '' : '';
                        const podcastURL: string = linkElement ? linkElement.textContent || '' : '';
                        const pubDate: string = dateElement ? dateElement.textContent || '' : '';
                        const duration: string = durationElement ? durationElement.textContent || '' : '';
                        const season: number = seasonElement && seasonElement.textContent ? parseInt(seasonElement.textContent) || 0 : 0;
                        const number: number = episodeElement && episodeElement.textContent ? parseInt(episodeElement.textContent) || 0 : 0;
                        const description : string = descriptionElement ? descriptionElement.textContent || '' : '';
                        const imageUrl: string= imageElement ? imageElement.getAttribute("href") || '' : '';
                        const type: string = typeElement ? typeElement.textContent || '' : ''; 

                        return {
                            title: title, 
                            podcastURL: podcastURL,
                            pubDate: pubDate,
                            episodeDuration: duration,
                            episodeSeason: season,
                            episodeNumber: number,
                            description: description,
                            poster: imageUrl,
                            episodeType: type,
                        };
                    });

                    resolve(episodes);
                } catch (error) {
                    reject(error);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}