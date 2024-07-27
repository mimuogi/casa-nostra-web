import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URLHandler = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const { search } = window.location;
		if (search.startsWith("/?/")) {
			const newPath = search.slice(3).replace(/~and~/g, "&");
			navigate(newPath, { replace: true });
		}
	}, [navigate]);

	return null;
};

export default URLHandler;
