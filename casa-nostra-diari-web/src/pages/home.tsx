import React from "react";
import './pages.css'
import { Layout } from "../components/layout/layout";
import { PostList } from "../components/cn-postslist/postslist";

export function Home(){
    return (
        <div>
           <Layout>
            <PostList></PostList>
           </Layout>
        </div>
    )
}
