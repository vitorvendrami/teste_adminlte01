import React, { useState } from 'react'
import { View, TouchableOpacity, Text, ScrollView, ActivityIndicator } from 'react-native'
import Lista from './lista/index'
import Styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function Fornecedor() {

    const navigation = useNavigation()
    const [isloading, setloading] = useState(false)

    function navigateToComprar() {

        navigation.navigate('Comprar')
    }
    function childloading(loading) {
        setloading(loading)
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>Escolha seu fornecedor: </Text>
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 450 }}>
                    <ScrollView>
                        <Lista func={childloading} />
                    </ScrollView>
                </View>
                <TouchableOpacity style={Styles.button} onPress={navigateToComprar}>
                    <Text style={Styles.text}> CONFIRMAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}