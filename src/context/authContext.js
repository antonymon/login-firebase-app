import { createContext, useContext, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase.config';


const authContext = createContext();

const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider.')
    return context;
}

function AuthProvider({ children }) {

    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);


    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);


    useEffect(() =>{
        onAuthStateChanged(auth, currentUser => {
            
        })
    }, [])

    return (
        <authContext.Provider value={{ signup, login }}>
            {children}
        </authContext.Provider>
    )
}

export {
    useAuth,
    AuthProvider,
    authContext
}