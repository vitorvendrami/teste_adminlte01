import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { SignIn } from '../services/auth'

const AuthContext = createContext({
    signed: false,
    user: null,
    signIn: Promise,
    signOut: null,
    loading: true,
})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState([])

    useEffect(() => {

        async function loadStorageData() {

            const storageUser = await AsyncStorage.getItem('@Delivery:user')
            const storageTolken = await AsyncStorage.getItem('@Delivery:tolken')
            if (storageUser && storageTolken) {

                setUser(JSON.parse(storageUser))
            }
             setLoading(false)
        }
        loadStorageData()
    }, [])

    async function signIn(user_email) {
        const response = await SignIn();
        setInfo(response.users)
        var teste = info.filter(res => res.email == user_email)
        if (teste.length !=0) {
            setUser(teste[0])
            await AsyncStorage.setItem('@Delivery:user', JSON.stringify(teste[0]))
            await AsyncStorage.setItem('@Delivery:tolken', teste[0].tolken)
        }else{
            alert('Usuário não cadastrado')
        }
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext