import React,{useContext} from 'react'
import styles from './style'
import {View,Text,TouchableOpacity} from 'react-native'
import AuthContext from '../../../contexts/auth'

export default function Perfil(){

    const {signOut} = useContext(AuthContext)

    const handleSignOUt = () =>{
        signOut()
    }

    return(
        <View style = {styles.container}> 
        
            <Text>Nome: </Text>
            <Text>Endereço: </Text>
            <TouchableOpacity onPress = {handleSignOUt} style = {styles.button}>
                <Text style = {styles.textB}>
                    SignOut
                </Text>
            </TouchableOpacity>
        </View>
    )
}