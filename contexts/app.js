import React, { createContext } from 'react'
import { useNavigation } from '@react-navigation/native'

const AppContext = createContext({
    navigatePerfil: null,
})

export const AppProvider = ({ children }) => {

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext