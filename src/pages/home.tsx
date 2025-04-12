import "./pages.css";
import { PostList } from "../components/cn-postslist/postslist";
import postlist from "../data/posts.json";
import podcastpostlist from "../data/podcast-posts.json";
import { usePagination } from "../customHooks/usePagination";
import { filterPosts } from "../scripts/utils/filterPosts";

const POSTS_PER_PAGE = 10;

export function Home() {
	const combinedPosts = [...postlist, ...podcastpostlist];

	const filteredPosts = filterPosts(combinedPosts, "altres");
	const homePosts = filterPosts(filteredPosts, "literatura");

	const { currentPage, totalPages, getPaginatedItems, handlePageChange } =
		usePagination(homePosts, POSTS_PER_PAGE);

	return (
		<div>
			<PostList postlist={getPaginatedItems()} />
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
