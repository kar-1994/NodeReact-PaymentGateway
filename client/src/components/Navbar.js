import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {logout} from '../actions/userActions'

export default function Navbar() {
    const cartState = useSelector(state => state.cartReducer);
    const userState = useSelector(state => state.loginUserReducer);
    const { currentUser } = userState;
    const dispatch = useDispatch();
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg shadow-lg p-3 mb-5">
            <a className="navbar-brand" href="/">MERN Store</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/cart">Cart <span className="badge badge-light">{cartState.cartItems.length}</span> </a>
                    </li>
                    {
                        currentUser ?
                            (
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#" onClick={() => dispatch(logout())}>Hi {currentUser.name} Logout</a>
                                    </li>
                         
                            ) :
                                (
                                <li className="nav-item active">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            )
                    }


                </ul>
            </div>
        </nav>
    );
}
