import React, {useContext}from 'react'
import AuthContext from '../contexts/auth'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import {View,ActivityIndicator} from 'react-native'


const Routes = () =>{

    const {signed,loading} = useContext(AuthContext)

    if(loading){
        return (
            <View style = {{flex:1,alignItems:'center',justifyContent: 'center'}}>
                <ActivityIndicator size = "large"/>
            </View>
        )
    }
    return(
       signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes