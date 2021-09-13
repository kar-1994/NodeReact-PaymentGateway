import axios from "axios";

export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })
    try {
        const response = await axios.post('/api/users/register', user);
        console.log(response);
        dispatch({ type: 'USER_REGISTER_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error });
    }
}

export const login = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })
    try {
        const response = await axios.post('/api/users/login', user);
        console.log(response);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error });
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cartItems');
    window.location.href = '/login';
}

