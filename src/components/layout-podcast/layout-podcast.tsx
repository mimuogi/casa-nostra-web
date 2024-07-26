import { ReactNode } from "react";
import "./layout-podcast.css";

export function LayoutPodcast({ children }: { children: ReactNode }) {
	return (
		<div className='layout'>
			<main className='main-column-grid'>{children}</main>
		</div>
	);
}
