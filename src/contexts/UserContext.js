import {
  createUserWithEmailAndPassword,
  getAuth, GithubAuthProvider, GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import app from "../Firebase/Firebase.init";


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //goole Sign in
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //github Sign in
  const githubSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };

  // create account with email and password
  const crateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in user for firebase
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // set profile and name
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //logOut user
  const logOut = () => {
    setLoading(true);
    toast.success("Successfully Log Out");
    return signOut(auth);
  };

  //current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser, "current User ");
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  //send data
  const authInfo = {
    user,
    loading,
    googleSignIn,
    githubSignIn,
    crateUser,
    signIn,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
