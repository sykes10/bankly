import React from 'react';
import './index.css'

export const Header = () => {
    return (
        <header className="header"  >
            <nav className="container">
                <a href="https://www.thisisbud.com/" target="_blank" rel="noreferrer">
                    <img src="/bankly.svg" alt="Bud logo" className="logo" width={112} height={30} />
                </a>
            </nav>
        </header>
    );
}
