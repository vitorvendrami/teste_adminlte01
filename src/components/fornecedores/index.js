import React, { useContext, useState } from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import Lista from './lista/index'
import Styles from './style'
import { useNavigation } from '@react-navigation/native'
import AppContext from '../../../contexts/app'
export default function Fornecedor() {

    const navigation = useNavigation()
    const { providername } = useContext(AppContext)
    const [nome, setnome] = useState('')
    function navigateToComprar() {
        console.log(providername)

        navigation.navigate('Comprar')
    }

    return (
        <View style={Styles.container}>
            <View style={{ marginTop: 100 }}>
                <Text style={Styles.text}>Escolha seu fornecedor: </Text>
                <View style={{ alignItems: 'center' }}>
                    <View style={Styles.divlista}>
                        <ScrollView>
                            <Lista func={() => setnome()} />
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={Styles.button} onPress={navigateToComprar}>
                        <Text style={Styles.text}> CONFIRMAR</Text>
                    </TouchableOpacity>
                </View>
            </View
        </View>
    )
}