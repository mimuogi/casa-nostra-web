import "./layout.css";
import { HeaderCN } from "../cn-header/cn-header";
import { FooterCN } from "../cn-footer/cn-footer";
import { CNNavigationBar } from "../cn-nav-bar/cn-nav-bar";
import { SeasonFolder } from "../podcast-season-folder/season-folder";

export function Layout({ children }) {
	return (
		<div className='layout'>
			<HeaderCN />
			<CNNavigationBar />
			<div className='main-layout'>
				<main className='posts'>{children}</main>
				<aside className='sidebar'>
					<SeasonFolder seasonTitle={"1"}></SeasonFolder>
				</aside>
			</div>
			<FooterCN />
		</div>
	);
}
