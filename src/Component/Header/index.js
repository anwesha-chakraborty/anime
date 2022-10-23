import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    
    return(
        <>
        <nav class="text-light p-2 position-sticky">
            <div className="row m-2">
                <Link className="navbar-brand col-md-1" to={"./"}><h2>Anime</h2></Link>
                <Link className="navbar-brand col-md-1" to={"./watchlist"} ><h2>Watchlist</h2></Link>
            </div>
        </nav>
        </>
    )
}

export default Header;