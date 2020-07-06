import React, { useContext } from 'react'
import styles from './style'
import { View, Text, TouchableOpacity } from 'react-native'
import AuthContext from '../../../contexts/auth'


export default function Perfil() {

    const { signOut, user } = useContext(AuthContext)

    const handleSignOUt = () => {
        signOut()
    }

    return (
        <View style={styles.container}>

            <View style = {styles.mainDiv}>
                <Text style = {styles.text}>Nome:{user.name}</Text>
                <Text style = {styles.text}>Endereço: </Text>
                <Text style = {styles.text}>Rua: {user.adress.street} </Text>
                <Text style = {styles.text}>Número: {user.adress.number} </Text>
                <Text style = {styles.text}>CEP: {user.adress.CEP} </Text>
            </View>
            <TouchableOpacity onPress={handleSignOUt} style={styles.button}>
                <Text style={styles.textB}>
                    SignOut
                </Text>
            </TouchableOpacity>
        </View>
    )
}