import "./layout-podcast.css";

export function LayoutPodcast({ children }) {
	return (
		<div className='layout'>
			<main className='main-column-grid'>{children}</main>
		</div>
	);
}
