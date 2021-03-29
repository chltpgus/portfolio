import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {

    return (
        <header className="nav">
            <nav className="headerNav">
                <i id="headerIcon" className="far fa-handshake"></i>
                <a className="headerLink" href="https://drive.google.com/file/d/1qOAdrv_3WMjGzLRYHevH-4QuLBF_hftB/view">이력서 보기</a>
            </nav>
        </header>
    );

}


export default Header;