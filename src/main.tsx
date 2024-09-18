import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import { About } from "./pages/about.tsx";
import { News } from "./pages/noticies.tsx";
import { PostPage } from "./pages/post.tsx";
import { allcontentlist } from "./scripts/utils/content-list.ts";
import { ContactPage } from "./pages/contact.tsx";
import { PodcastPage } from "./pages/podcast.tsx";
import { Layout } from "./components/layout/layout";
//import { CollaboratePage } from "./pages/collaborate.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />, // Use Layout here to ensure it wraps around the pages
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/nosaltres",
				element: <About />,
			},
			{
				path: "/noticies",
				element: <News />,
			},
			{
				path: "/podcast",
				element: <PodcastPage />,
			},
			/*
			{
				path: "/participa",
				element: <CollaboratePage />,
			},
			*/
			{
				path: "/contacte",
				element: <ContactPage />,
			},
			{
				path: "/:id",
				element: <PostPage />,
				loader: ({ params }) => {
					const post = allcontentlist.find((post) => post.id === params.id);
					if (!post) {
						throw new Error("Post not found");
					}
					return { post };
				},
			},
			{
				path: "*",
				element: <Home />,
			},
		],
	},
]);

// {basename: "/casa-nostra-web",}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
