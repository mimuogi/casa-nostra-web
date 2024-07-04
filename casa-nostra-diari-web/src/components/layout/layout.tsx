import './layout.css'
import { HeaderCN } from "../cn-header/cn-header";
import { FooterCN } from "../cn-footer/cn-footer";
import { CNNavigationBar } from "../cn-nav-bar/cn-nav-bar";

export function Layout({children}){
    return (
    
    <div className="layout">
        <HeaderCN/>
        <CNNavigationBar/>
        <div>{children}</div>
        <FooterCN/>
    </div>
    )
}