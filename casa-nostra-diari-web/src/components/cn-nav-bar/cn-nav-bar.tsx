import { Link } from "react-router-dom"
import './cn-nav-bar.css'

export function CNNavigationBar(){
    return (
        <div className="cnavbar">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/about">Nosaltres</Link>
            <Link className="links" to ="/noticies">Notícies</Link>
            <Link className="links" to ="/divulgacio">Divulgació</Link>
            <Link className="links" to ="/cultura">Cultura</Link>
            <Link className="links" to ="/altres">Altres</Link>
            <Link className="links" to ="/contacte">Contacte</Link>
            <Link className="links" to ="/podcast">Podcast</Link>
        </div>
    )
}