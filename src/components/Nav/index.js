import React from 'react';
import styledComponents from 'styled-components';

const NavStyles = styledComponents.nav`
    height: 100%;
    width: 100%;
    box-shadow: 6px 5px 10px #888888;

    .list-item{
        padding-top: 1rem;
        padding-bottom: 5px;
        list-style: none;
        font-size: 20px;
    }

    .nav-list{
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        align-items: center;
    }

    .header-name{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
    }
    `

function Nav() {
    return (
        <NavStyles>
            <h2 className="header-name">
                Jared Chesebro'
            </h2>
            <nav>
                <ul className="nav-list">
                    <li className='list-item'>
                        About me
                    </li>
                    <li className='list-item'>
                        Contact
                    </li>
                    <li className='list-item'>
                        Projects
                    </li>
                </ul>
            </nav>
        </NavStyles>
    );
}

export default Nav;