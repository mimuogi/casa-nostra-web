import React, { useState } from "react";
import "./pages.css";
import { PostList } from "../components/cn-postslist/postslist";
import postlist from "../data/posts.json";

const POSTS_PER_PAGE = 10;

export function Home() {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(postlist.length / POSTS_PER_PAGE);

	const getPaginatedPosts = () => {
		const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
		const endIndex = startIndex + POSTS_PER_PAGE;
		return postlist.slice(startIndex, endIndex);
	};

	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	return (
		<div>
			<PostList postlist={getPaginatedPosts()} />
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
