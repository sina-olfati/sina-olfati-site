import React, { useEffect } from 'react';

// Components
import Product from './shared/Product';

// redux
import { fetchProducts } from '../redux/products/productsAction';
import { useSelector, useDispatch } from 'react-redux';

// Style
import styles from "./Store.module.css";

const Store = () => {
    
    const dispatch = useDispatch()
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className={styles.container} >
            {
                productsState.loading?
                    <h2>Loding ...</h2> :
                productsState.error ? 
                    <p>something went wrong</p> :
                productsState.products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;