import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {

    return (
        <header className="nav">
            <nav className="headerNav">
                <i id="headerIcon" className="far fa-handshake"></i>
                <Link className="headerLink" to="">이력서 보기</Link>
            </nav>
        </header>
    );

}


export default Header;