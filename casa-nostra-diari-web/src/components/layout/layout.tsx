import React from "react";
import './layout.css'
import { HeaderCN } from "../cn-header/cn-header";
import { FooterCN } from "../cn-footer/cn-footer";

export function Layout({children}){
    return (
    
    <div className="layout">
        <HeaderCN/>
        <div>{children}</div>
        <FooterCN/>
    </div>
    )
}