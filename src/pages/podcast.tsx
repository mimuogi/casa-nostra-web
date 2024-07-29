import "./pages.css";
import { LayoutPodcast } from "../components/layout-podcast/layout-podcast";
import { PodcastPreviewCard } from "../components/cn-podcast-preview/cn-podcast-preview";
import podcastpostlist from "../data/podcast-posts.json";
import { usePagination } from "../customHooks/usePagination";
import { PostType } from "../types/Post";

const POSTS_PER_PAGE = 9;

export function PodcastPage() {
	const podcastPosts = podcastpostlist.filter(
		(post) => post.tags && post.tags.includes("podcast")
	);

	const { currentPage, totalPages, getPaginatedItems, handlePageChange } =
		usePagination(podcastPosts, POSTS_PER_PAGE);

	return (
		<div>
			<LayoutPodcast>
				{getPaginatedItems().map((post: PostType) => (
					<PodcastPreviewCard
						key={post.title}
						post={post}
					/>
				))}
			</LayoutPodcast>
			<div className='pagination'>
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}>
					&laquo; Anterior
				</button>
				<span>
					Pàgina {currentPage} de {totalPages}
				</span>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}>
					Seguent &raquo;
				</button>
			</div>
		</div>
	);
}
