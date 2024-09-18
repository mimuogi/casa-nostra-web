import ReactMarkdown from "react-markdown";
import pagesText from "../data/pages.json";

export function About() {
	return (
		<div>
			<h1 style={{ textAlign: `center`, marginBottom: `40px` }}>
			</h1>
			<ReactMarkdown
				className='markdown-content'
				children={pagesText[0].content}
			/>
		</div>
	);
}
