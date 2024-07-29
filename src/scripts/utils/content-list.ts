import postlist from "../../data/posts.json";
import podcastlist from "../../data/podcast-posts.json";
import altreslist from "../../data/altres.json";

export const allcontentlist = [...postlist, ...podcastlist, ...altreslist];
