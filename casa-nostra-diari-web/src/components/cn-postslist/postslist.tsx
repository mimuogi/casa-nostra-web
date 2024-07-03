import React from "react";
import './cn-postslist.css'
import postlist from '../../data/posts.json'
import ReactMarkdown from "react-markdown";

export function PostList(){
    const contentSummary = postlist.map(post =>{
        return post.content.split(" ").slice(0,5).join(" ")
    })

    return (
        <div className="postlist">
            <h1 className="title">Els nostres posts</h1>
            {postlist.length && 
                postlist.map((post, i) =>{
                    return (
                        <div key = {i} className="post-card">
                            <h2> {post.title}</h2>
                            <small> Publicat en: {post.date} by {post.author} </small>
                            <hr/>
                            <ReactMarkdown children={contentSummary[i]}/>
                            <small>Llig el post complet</small>
                        </div>
                    )
                })
            }
        </div>
    )
}