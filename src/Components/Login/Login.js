import React from 'react';
import Header from '../Header/Header';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app() ;


const Login = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn =()=>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => { 
         const {displayName, email} = result.user;
         const signedInUser ={name:displayName, email}
         setLoggedInUser(signedInUser);
         history.replace(from);
         console.log(signedInUser);
    // ...
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div className="text-center">
            <Header></Header>
            <h4 className="pt-5" >Login</h4>
            <br/>
            <button onClick={handleGoogleSignIn} className="btn btn-primary ml-auto mr-auto"> Continue With Google</button>

        </div>
    );
};

export default Login;