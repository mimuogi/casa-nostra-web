import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import { About } from "./pages/about.tsx";
import { PostPage } from "./pages/post.tsx";

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
		path: "/post/:id",
		element: <PostPage />,
		loader: ({ params }) => {
			console.log(params.id);
			return params;
		},
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
