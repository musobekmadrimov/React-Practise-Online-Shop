import React from 'react'
import navLogo from '../assets/images/logo.png'
import like from '../assets/images/navIcons/like.png';
import user from '../assets/images/navIcons/user.png';
import shopping from '../assets/images/navIcons/shopping.png';
import SearchIcon from '@material-ui/icons/Search';


export default function Nav() {
    return (
        <>
            <nav className="navigation">
                <a href="#" className="nav-logo">
                    <img src={navLogo} alt="Navbar Logo" />
                </a>

                <div className="searchSec">
                    <form>
                        <input type="text" className="searchInput" placeholder="Search for Products, Brands and Categories" />
                        <button className="searchBtn" type="button">
                            <SearchIcon />
                        </button>
                    </form>
                </div>

                <div className="icons">
                    <a href="#" className="bolimlar">
                        <img src={shopping} alt="shopping icon" />
                    </a>
                    <a href="#" className="bolimlar">
                        <img src={like} alt="like icon" />
                    </a>
                    <a href="#" className="bolimlar">
                        <img src={user} alt="user icon" />
                    </a>
                </div>
            </nav>
        </>
    )
}
