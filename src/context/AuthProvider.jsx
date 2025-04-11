import { useEffect, useState } from "react";
import app from "../firebase.init";
import AuthContext from "./AuthContext";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";



const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        user,
        setUser,
        createUser,
        googleSignIn,
        signIn,
        loading,
        logOut,



    }

    console.log(user);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [user])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;