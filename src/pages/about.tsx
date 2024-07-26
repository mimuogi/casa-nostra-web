import ReactMarkdown from "react-markdown";
import pagesText from "../data/pages.json";

export function About() {
	return (
		<div>
			<h1 style={{ textAlign: `center`, marginBottom: `40px` }}>
				Qui som nosaltres?
			</h1>
			<ReactMarkdown
				className='markdown-content'
				children={pagesText[0].content}
			/>
		</div>
	);
}
