import React, { useEffect } from 'react';

// Components
import Product from './shared/Product';
import Loader from './shared/Loader';
import Navbar from './shared/Navbar';

// redux
import { fetchProducts } from '../redux/products/productsAction';
import { useSelector, useDispatch } from 'react-redux';

// Style
import styles from "./Store.module.css";

const Store = () => {
    
    const dispatch = useDispatch()
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts())
    }, [])

    return (
        <div dir='ltr'>
            <Navbar />
            <div className={styles.container} >
                {
                    productsState.loading ?
                        <Loader /> :
                    productsState.error ? 
                        <p>something went wrong</p> :
                    productsState.products.map(product => <Product key={product.id} productData={product} />)
                }
            </div>
        </div>
    );
};

export default Store;