import React from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-center'>
                <div className="header-left">
                    <h1>
                        <Link to="/">
                            Guitar
                            <span>Store</span>
                        </Link>
                    </h1>
                </div>
                <ul className='header-center-nav'>

                    <li >
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/productpage" >Products</Link>
                    </li>
                    <li>
                        <Link to="/aboutpg" >About</Link>
                    </li>

                </ul>
                <ul className='header-center-right'>
                    <li className="header--right-item header--hover-icon">
                        <Link to="" className="header--icon">
                            <i className="fa-solid fa-user header--login"></i>
                        </Link>
                        <div className='bridge'></div>
                        <div className="login-form">
                            <label htmlFor="email">Email:</label>
                            <input type="email" />
                            <label htmlFor="password">Password:</label>
                            <input type="password" />
                            New Customer?
                            <Link to="">Register Here!</Link>
                            <button type='submit'>Log in</button>
                        </div>
                    </li>
                    <li className="header--right-item">
                        <Link to="/cartpage" className="header--icon">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header