import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user.email;
            const loggedUserEmail = { email: userEmail };
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUserEmail, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUserEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });

        return () => {
            unSubscrive();
        }
    }, [auth]);

    const profileUpdate = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = { user, loading, createUser, loginUser, googleLogin, profileUpdate, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;