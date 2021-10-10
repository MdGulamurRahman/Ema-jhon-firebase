import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut,FacebookAuthProvider} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from '../Firebase/firebase.init'
initAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
//google
    const googleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider)
        
        .catch(error=>{
            setError(error)
        })
    }
    //facebook
    const facebookHandler = ()=>{
        signInWithPopup(auth, FacebookProvider)
        .then(result=>{
            const user = result.user
            setUser(user)
            setError('')
        })
        .catch(error=>{
            setError(error)
        })
    }

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    },[])

    return {
        user,
        error,
        googleSignIn,
        facebookHandler,
        logOut
    }
};

export default useFirebase;