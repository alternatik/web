import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="/alternatik">Alternatik</Link>
                <ul className="submenu">
                    <li><Link to="/hizmetlerimiz">Hizmetlerimiz</Link></li>
                    <li><Link to="/fiyatlar">Fiyatlar</Link></li>
                </ul>
            </li>

            <li><Link to="/portfolio">Portfolio</Link></li>

            <li><Link to="/blog">Blog</Link></li>

            <li><Link to="/iletisim">İletişim</Link></li>
        </ul>
    )
}
export default Nav;
