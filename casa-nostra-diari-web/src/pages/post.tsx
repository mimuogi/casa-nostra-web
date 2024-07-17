import { useParams } from "react-router-dom";

export function PostPage() {
	const params = useParams();

	return <div>{params.id}</div>;
}
