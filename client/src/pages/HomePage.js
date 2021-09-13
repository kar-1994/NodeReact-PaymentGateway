import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions'
import Loading from '../components/Loading';
import Error from '../components/Error';
import Product from '../components/Product';

export default function HomePage() {
    const dispatch = useDispatch();
    const productsstate = useSelector(state => state.getAllProductsReducer);
    const { products, error, loading } = productsstate;
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
    return (
        <div>
            <div className="row justify-content-center">
                {
                    loading ? (<Loading />) :
                        error ? (<Error error='Something went wrong' />) : (
                            products.map(product => {
                                return (
                                    <div className="col-md-3 m-3" key={product._id}>
                                        <div>
                                            <Product product={product} />
                                        </div>
                                    </div>
                                );
                            })
                        )
                }
            </div>
        </div>
    );
}
