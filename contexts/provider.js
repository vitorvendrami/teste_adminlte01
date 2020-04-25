import React from 'react'
import { AuthProvider } from './auth'
import { AppProvider } from './app'

export const Provider = ({ children }) => {

    return (
        <AuthProvider>
            <AppProvider>
                {children}
            </AppProvider>
        </AuthProvider>
    )
}