import React, { createContext, useState,useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const AppContext = createContext({
    totalCompra: 0,
    handleSetTotal: null,
    handleSetProvider: null,
    providerName: '',
})

export const AppProvider = ({ children }) => {

    const [totalCompra, setTotal] = useState(0)
    const [providerName,setProvider] = useState('')

    useEffect(() => {
       
        async function loadStorageData() {

            const storageProviderName = await AsyncStorage.getItem('@Delivery:providerName')
        

            if (storageProviderName) { 
                setUser(storageProviderName)
            }
        }

        loadStorageData()
    }, [])
    function handleSetTotal(total){
        setTotal(total)
    }
    async function handleSetProvider(provider){
        
        setProvider(provider)
        await AsyncStorage.setItem('@Delivery:providerName',providerName)
    }
    return (
        <AppContext.Provider value={{ totalCompra, handleSetTotal, handleSetProvider,providerName}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext