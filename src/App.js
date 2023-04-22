import React, { Fragment, useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from './firebase'
import { useStateValue } from "./StateProvider";


function App() {
 const [{},dispatch] =useStateValue();



  useEffect(()=>{
    //will only run  once when the app components load
     auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if (authUser) {
        //the user was just logged in
         

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //ther user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      } 
     })
  },[])
  return (
    //bem convention
    <Router>
      <div className="App">
   
        <Routes>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/checkout" 
             element={<><Header /> <Checkout /></>} >
               
              
          </Route>
          <Route path="/" element={<><Header /> <Home /></>}>
             
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
