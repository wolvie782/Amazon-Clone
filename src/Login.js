import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css';
// import { useStateValue } from './StateProvider';
import {auth} from './firebase' 


function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const signIn = e =>{
  e.preventDefault();


  auth
    .signInWithEmailAndPassword(email, password)
    .then(auth =>{
    history('/')
  })
  .catch(error => alert(error.message))
  //some fancy firebase login here
}

const register = e => {
    e.preventDefault();

    auth
       .createUserWithEmailAndPassword(email,password)
       .then((auth)=> {
        //it sucesfully created a new user with email and password
        console.log(auth);
        if(auth){
            history('/')
        }
       })
       .catch(error => alert(error.message))

    //here do some fancy firebase shitt here 
}
    return (
    <div className='login' >
        <Link to="/">
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
         />
        </Link> 
        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='email' placeHolder="email" value={email} onChange={ e =>
                    setEmail(e.target.value) }/>
                <h5>Password</h5>
                <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>

                <button className='login_signInButton' onClick={signIn} type='submit'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the Amazon's Fake Clone Condition of use & Sale. Please see our Privacy Notice and our Interest-Based Ads Notice.
            </p>
            <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
         </div>
        </div>
         
  )
}

export default Login