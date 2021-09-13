import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../actions/userActions";
import Loading from '../components/Loading';
import Error from '../components/Error';    
import Success from '../components/Success';    


export default function RegisterPage() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");

    const registerstate=useSelector(state=> state.registerUserReducer);
    const {loading,error,success}=registerstate;

    const dispatch = useDispatch();

    function register() {
        if (password !== cpassword) {
            alert('Password not matched');
        } else {
            const user = {
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user));
        }

    }
    return (
        <div>

            <div className="row justify-content-center">
                <div className="col-md-5 text-left shadow-lg p-3 mb-5">
                    <h1>Register</h1>
                    {loading && (<Loading/>)}
                    {success && (<Success msg='User Registered Successfully'/>)}
                    {error && (<Error error='User Already Exists'/>)}

                    <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
                    <input required type="password" placeholder="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    <input required type="password" placeholder="confirm password" className="form-control" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                    <button className="btn btn-primary mt-3 mb-3" onClick={register}>Register</button>
                    <br />
                    <a href="/login" className="mt-2">Click here to login</a>
                </div>
            </div>
        </div>
    );
}
