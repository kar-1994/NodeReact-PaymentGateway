export const addToCart = (product, quantity) => (dispatch, getState) => {

    var cartItem = {
        name: product.productName,
        _id: product._id,
        image: product.thumbnailFileUrl,
        quantity: Number(quantity),
        price: Number(product.price)

    }

    if (cartItem.quantity > 10) {
        alert('Quantity cannot be more than 10 ')
    }
    else if (cartItem.quantity === 0) {
        dispatch({ type: 'DELETE_FROM_CART', payload: cartItem });
    } else {
        dispatch({ type: 'ADD_TO_CART', payload: cartItem })
    }
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart = (product) => (dispatch, getState) => {


    dispatch({ type: 'DELETE_FROM_CART', payload: product })

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}