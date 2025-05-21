import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase';

export const AuthContext=createContext()
const provider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
console.log(user)
const newUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const userProfile=(updateInfo)=>{
    return updateProfile(auth.currentUser,updateInfo)
}
const logOut=()=>{
    return signOut(auth)
}
const googleSignIn=()=>{
    return signInWithPopup(auth,provider)
}
useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
                  setUser(currentUser)
                })
                return()=>{
                    unSubscribe()
                  }
},[])
const userInfo={
    newUser,
    loginUser,
    userProfile,
    googleSignIn,
    logOut,
    user,
    setUser,
}
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;