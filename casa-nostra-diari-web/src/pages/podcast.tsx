import "./pages.css";
import { LayoutPodcast } from "../components/layout-podcast/layout-podcast";
import { PodcastPreviewCard } from "../components/cn-podcast-preview/cn-podcast-preview";
import postlist from "../data/posts.json";

export function PodcastPage() {
	return (
		<div>
			<LayoutPodcast>
				{postlist.map((post, index) => (
					<PodcastPreviewCard
						key={index}
						post={post}
					/>
				))}
			</LayoutPodcast>
		</div>
	);
}
