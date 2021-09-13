import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {addToCart} from '../actions/cartActions'

export default function Product({ product }) {
    const [quantity, setquantity] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    function addProductToCart(){
        dispatch(addToCart(product,quantity));
    }
    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
                <h1>{product.productName}</h1>
                <img className="img-fluid" src={'assets/images/'+product.thumbnailFileUrl} style={{ height: '200px' }} alt={product.productName}></img>
            </div>
            <div className="flex-container">
                <div className="m-1 w-100">
                    <span className='mt-1' style={{ fontWeight: 'bold' }}>Quantity : </span>
                    <select className='mt-1' value={quantity} onChange={(event) => { setquantity(event.target.value) }}>
                        {[...Array(10).keys()].map((item, index) => {
                            return <option key={index} value={index + 1}>{index + 1}</option>
                        })}
                    </select>
                </div>
                <div className="m-1 w-100">
                    <h1 className='mt-1'>Price : &#8377;{product.price * quantity}</h1>
                </div>
            </div>
            <div className="cartDiv mt-1">
                <button className="btn" onClick={addProductToCart}>Add to cart</button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.productName}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img className="img-fluid" src={'assets/images/'+product.imageFileUrl} alt={product.productName}></img>
                    <p>Price : &#8377;{product.price}</p>
                    <p>{ product.description }</p>
                </Modal.Body>

            </Modal>
        </div>


    );
}
