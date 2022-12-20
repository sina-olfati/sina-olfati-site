import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// components
import Navbar from './shared/Navbar';

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {

    const id = useParams().id;
    const data = useSelector(state => state.productsState.products)
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div dir='ltr'>
        <Navbar />
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
             <div className={styles.textContainer}>
                 <h3>{title}</h3>
                 <p className={styles.description}>{description}</p>
                 <p className={styles.category}><span>Category:</span> {category}</p>
                 <div className={styles.buttonContainer}>
                     <span className={styles.price}>{price} $</span>
                     <Link to="/sina-olfati-site/products">Back to Shop</Link>
                 </div>
             </div>
         </div>
        </div>
    );
};

export default ProductDetails;