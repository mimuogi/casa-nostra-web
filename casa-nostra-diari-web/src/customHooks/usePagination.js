import { useState } from "react";

export const usePagination = (items, itemsPerPage) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(items.length / itemsPerPage);

	function getPaginatedItems() {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return items.slice(startIndex, endIndex);
	}

	function handlePageChange(page) {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	}

	return {
		currentPage,
		totalPages,
		getPaginatedItems,
		handlePageChange,
	};
};
