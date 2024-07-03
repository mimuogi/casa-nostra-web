import React from "react";
import './cn-footer.css'

export function FooterCN(){
    return (
        <div className="footer">
            <hr/>
            <p>&copy; mimuogi {new Date().getFullYear()}</p>
        </div>
    )
}