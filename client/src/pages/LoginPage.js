import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../actions/userActions";
import Loading from '../components/Loading';
import Error from '../components/Error';
export default function LoginPage() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate=useSelector(state=> state.loginUserReducer);
  const {loading,error}=loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = "/"
    }
  }, []);

  function loginUser() {
    const user = {
      email,
      password
    }
    dispatch(login(user));
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 text-left shadow-lg p-3 mb-5">
          <h1>Login</h1>
          {loading && (<Loading/>)}
          {error && (<Error error='Invalid Credentials'/>)}
          
          <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
          <input required type="password" placeholder="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} />
          <button className="btn btn-primary mt-3 mb-3" onClick={loginUser}>Login</button>
          <br />
          <a href="/register" className="mt-5">New User? Register here</a>
        </div>
      </div>
    </div>
  );
}
