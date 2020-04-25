import React,{useContext} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import AuthContext from '../../../contexts/auth'

export default function Perfil(){

    const {signOut} = useContext(AuthContext)

    const handleSignOUt = () =>{
        signOut()
    }

    return(
        <View>
            <Text>
                Testando
            </Text>
            <TouchableOpacity onPress = {handleSignOUt}>
                <Text>
                    SignOut
                </Text>
            </TouchableOpacity>
        </View>
    )
}