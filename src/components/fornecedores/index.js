import React from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import Lista from './lista/index'
import Styles from './style'
import Cabecalho from '../cabecalho/index'
import { useNavigation } from '@react-navigation/native'
import styles from '../cabecalho/style'

export default function Fornecedor() {
    const navigation = useNavigation()
    navigateToEndereco = () => {
        navigation.navigate('Comprar')
    }
    return (
        <View style={Styles.container}>
            <Cabecalho title='Fornecedores' />
            <View style = {{marginTop: 100}}>
                <Text style={Styles.text}>Escolha seu fornecedor: </Text>
                <View style={{ alignItems: 'center' }}>
                    <View style={Styles.divlista}>
                        <ScrollView style={{ backgroundColor: '#337ff2' }}>
                            <Lista />
                        </ScrollView>
                    </View>

                    <TouchableOpacity style={Styles.button} onPress={navigateToEndereco}>
                        <Text style={Styles.text}> CONFIRMAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}