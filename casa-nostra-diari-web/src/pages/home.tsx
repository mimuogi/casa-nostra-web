// src/pages/Home.js
import React from "react";
import "./pages.css";
import { PostList } from "../components/cn-postslist/postslist";
import postlist from "../data/posts.json";
import { usePagination } from "../customHooks/usePagination";

const POSTS_PER_PAGE = 10;

export function Home() {
	const { currentPage, totalPages, getPaginatedItems, handlePageChange } =
		usePagination(postlist, POSTS_PER_PAGE);

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
