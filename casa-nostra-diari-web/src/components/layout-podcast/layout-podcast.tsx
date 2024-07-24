import { HeaderCN } from "../cn-header/cn-header";
import { FooterCN } from "../cn-footer/cn-footer";
import { CNNavigationBar } from "../cn-nav-bar/cn-nav-bar";
import { SeasonFolder } from "../podcast-season-folder/season-folder";
import "./layout-podcast.css";

export function LayoutPodcast({ children }) {
	return (
		<div className='layout'>
			<HeaderCN />
			<CNNavigationBar />
			<div className='main-layout'>
				<main className='main-column-grid'>{children}</main>
				<aside className='sidebar'>
					<SeasonFolder seasonTitle={"1"}></SeasonFolder>
				</aside>
			</div>
			<FooterCN />
		</div>
	);
}
