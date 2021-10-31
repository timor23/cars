import React from "react";
import './style.css';

const NavBar = () => {


    return(
        <div id={"navbar"} className={"navbar"}>
            <h1 className={"logo"}>
                    <span className={"text-primary"}
                    ><i className={"fas fa-book-open"}></i> Edge</span
                    >Leger
            </h1>

            <nav>
                <ul>
                    <li><div>Employees</div></li>
                    <li><div>Cars</div></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;