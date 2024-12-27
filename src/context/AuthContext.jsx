import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './../config/firebase.config';
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
    // google sign in 
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    // user signup with email and password
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user signin with email and password
    const userSignIn = (email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
    }

    // update user profile
    const updateUserProfile = (name,photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})
    }

    // user logout
    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            toast.success("User loggedout!")
        })
    }

    // on auth state change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribed();
        }
    },[])
    const authInfo={user,setUser,loading,googleSignIn,createUser,updateUserProfile,logOut,userSignIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;