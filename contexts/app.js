import React, { createContext, useState } from 'react'

const AppContext = createContext({
    totalCompra: 0,
    handleSetTotal: null,
})

export const AppProvider = ({ children }) => {

    const [totalCompra, setTotal] = useState(0)

    function handleSetTotal(total){
        setTotal(total)
    }

    return (
        <AppContext.Provider value={{ totalCompra, handleSetTotal }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext