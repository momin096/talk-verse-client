import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import app from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { axiosSecure } from "../hooks/useAxiosSecure";



const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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


    const UpdateUserInfo = (updatedDoc) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedDoc)
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
        UpdateUserInfo,
        logOut,



    }

    console.log(user);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async currentUser => {
            if (currentUser?.email) {
                setUser(currentUser);
                const { data } = await axiosSecure.post('/jwt', { email: currentUser?.email });
                if (data) {
                    console.log('token', data);
                    setLoading(false);

                }
            }
            else {
                const { data } = await axiosSecure.post('/logout', {});
                console.log(data);
                setUser(null);
                setLoading(false)
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;