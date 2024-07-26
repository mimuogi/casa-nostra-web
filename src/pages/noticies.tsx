import { useState } from "react";
import "./pages.css";
import { PostList } from "../components/cn-postslist/postslist";
import postlist from "../data/posts.json";
import { usePagination } from "../customHooks/usePagination";
import { filterPosts } from "../scripts/utils/filterPosts";
import { availableTags } from "../dev/metadata";

const POSTS_PER_PAGE = 10;

export function News() {
	const [selectedTag, setSelectedTag] = useState("");

	const filteredPosts = filterPosts(postlist, "podcast", selectedTag);

	const { currentPage, totalPages, getPaginatedItems, handlePageChange } =
		usePagination(filteredPosts, POSTS_PER_PAGE);

	const filteredTags = availableTags.filter(
		(tag: string) => tag.toLowerCase() !== "podcast"
	);

	return (
		<div>
			<div className='filter-container'>
				<label htmlFor='tagFilter'>Troba:</label>
				<select
					id='tagFilter'
					value={selectedTag}
					onChange={(e) => setSelectedTag(e.target.value)}>
					<option value=''>Tot</option>
					{filteredTags.map((tag: string) => (
						<option
							key={tag}
							value={tag}>
							{tag.charAt(0).toUpperCase() + tag.slice(1)}
						</option>
					))}
				</select>
			</div>
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
