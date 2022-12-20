import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {

    const state = useSelector(state => state.cartState);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div>
                <Link className={styles.productLink} to="/sina-olfati-site/products">Products</Link>
                <Link className={styles.productLink} to="/sina-olfati-site">Sina's Site</Link>
                </div>
                <div className={styles.iconContainer}>
                    <Link to="/sina-olfati-site/cart"><img src={shopIcon} alt='Shopping Cart Icon' /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;