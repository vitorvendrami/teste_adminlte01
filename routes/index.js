import React, {useContext}from 'react'
import AuthContext from '../contexts/auth'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'


const Routes = () =>{

    const {signed,loading} = useContext(AuthContext)

    if(loading)
    return(
       signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes