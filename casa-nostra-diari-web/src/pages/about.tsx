import ReactMarkdown from "react-markdown"
import pagesText from "../data/pages.json"
import {Layout} from "../components/layout/layout.tsx"

export function About(){
    return (
        <Layout>
             <h1 style={{textAlign: `center`, marginBottom: `40px`}}>Qui som nosaltres?</h1>
            <div className="page-content">
                <ReactMarkdown children={pagesText[0].content}/>
            </div>
        </Layout>
    )
}
