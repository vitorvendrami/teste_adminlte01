import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

export default function Teste() {

    const navigation = useNavigation();
    function navigateToPerfil() {
        return (navigation.navigate('Perfil'))
    }

    return (
        <TouchableOpacity onPress={navigateToPerfil}>
            <View style={styles.container}>
                <Icon name = 'user' size = {35} color = 'white'/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black',
    },
})