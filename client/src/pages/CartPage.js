import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartActions';

export default function Cartpage() {

    const cartstate = useSelector(state => state.cartReducer);
    const cartItems = cartstate.cartItems;
    var subTotal = cartItems.reduce((initialValue, item) => initialValue + item.price, 0);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 style={{ fontSize: '25px' }}>Cart Details</h2>

                    {cartItems.map(item => {
                        return (<div className="flex-container" key={item._id}>
                            <div className="text-left m-1 w-100">
                                <h1>{item.name}</h1>
                                <h1>Price: {item.quantity} * {item.price} =  &#8377;{item.quantity * item.price}</h1>
                                <h1 style={{ display: 'inline' }}>Quantity : </h1>
                                <i className="fa fa-plus" style={{ color: 'green' }} aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1)) }}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" style={{ color: 'red' }} aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1)) }}></i>
                                <hr />
                            </div>
                            <div className="m-1 w-100">
                                <img className="img-fluid" src={'assets/images/' + item.image} style={{ height: '80px', width: '80px' }} alt={item.name}></img>
                            </div>
                            <div className="m-1 w-100">
                                <i className="fa fa-trash mt-2" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i>
                            </div>
                        </div>)
                    })}

                </div>
                <div className="col-md-4">
                    <h2 style={{ fontSize: '25px' }}>Subtotal :  &#8377;{subTotal}</h2>
                    <button className="btn btn-primary">Checkout</button>
                </div>
            </div>
        </div>
    );
}
