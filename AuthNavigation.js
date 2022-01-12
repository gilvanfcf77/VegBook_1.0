import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthNavigation = () => {

    const [currentUser, setCurrentUser] = useState(null)

    const userHandler = user => user ? setCurrentUser(user) : setCurrentUser(null)

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            userHandler(user)
        });
    }, [])

    return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>

}

export default AuthNavigation
