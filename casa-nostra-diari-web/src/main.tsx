import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import { About } from "./pages/about.tsx";
import { PostPage } from "./pages/post.tsx";
import postlist from "./data/posts.json";
import { ContactPage } from "./pages/contact.tsx";
import { PodcastPage } from "./pages/podcast.tsx";

const router = createBrowserRouter([
	{
		path: "*",
		element: <About></About>,
	},
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/podcast",
		element: <PodcastPage />,
	},
	{
		path: "/contacte",
		element: <ContactPage></ContactPage>,
	},
	{
		path: "/post/:id",
		element: <PostPage />,
		loader: ({ params }) => {
			const post = postlist.find((post) => post.id === params.id);
			if (!post) {
				throw new Error("Post not found");
			}
			return { post };
		},
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
