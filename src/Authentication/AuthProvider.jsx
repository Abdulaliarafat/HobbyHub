import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase';

export const AuthContext=createContext()

const provider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
console.log(user)

const newUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const loginUser=(email,password)=>{
     setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const userProfile=(updateInfo)=>{
    return updateProfile(auth.currentUser,updateInfo)
}
const logOut=()=>{
    return signOut(auth)
}
const googleSignIn=()=>{
     setLoading(true)
    return signInWithPopup(auth,provider)
}
useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
                  setUser(currentUser)
                   setLoading(false)
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
    loading,
    setLoading,
}
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;