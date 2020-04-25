import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as auth from '../services/auth'

const AuthContext = createContext({
    signed: false,
    user: {},
    signIn: Promise,
    signOut: null,
    loading: true,
})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
       
        async function loadStorageData() {

            signIn()
            const storageUser = await AsyncStorage.getItem('@Delivery:user')
            const storageTolken = await AsyncStorage.getItem('@Delivery:tolken')


            if (storageUser && storageTolken) {
                
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
        }

        loadStorageData()
    }, [])
    async function signIn() {
        const response = await auth.signIn();

        setUser(response.user)

        await AsyncStorage.setItem('@Delivery:user', JSON.stringify(response.user))
        await AsyncStorage.setItem('@Delivery:tolken', response.tolken)
    }
    function signOut() {
        AsyncStorage.clear().then(()=>{
            setUser(null)
        })
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut,loading }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext