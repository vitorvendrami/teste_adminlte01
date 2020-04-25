import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function Teste(){
    
    const navigation = useNavigation();
    function navigateToPerfil(){
        return(navigation.navigate('Perfil'))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress = {navigateToPerfil}>
                <Text style={{ color: 'white' }}>A</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black',
    },
})