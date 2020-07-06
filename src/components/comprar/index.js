import React, { useState, useContext } from 'react'
import AppContext from '../../../contexts/app'
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import Styles from './style'
import Lista from './lista/index'
import { useNavigation } from '@react-navigation/native'

export default function Comprar() {


    const { totalCompra } = useContext(AppContext)

    const navigation = useNavigation()


    navigateToConfirmar = () => navigation.navigate('Confirmação')

    button = () => {
        if (totalCompra > 0) {
            navigateToConfirmar()
        }else{
            alert('Selecione pelo menos um ítem')
        }
    }
    return (
        <View style={Styles.container}>
            <View style={{  alignItems: 'center' }}>
                <View style={Styles.viewlista}>
                    <ScrollView>
                        <Lista />
                    </ScrollView>
                </View>
                <View style={Styles.viewtotal}>
                    <Text style={Styles.textTotal}>Total: R$ {totalCompra} </Text>
                </View>
                <TouchableOpacity style={Styles.button} onPress={button}>
                    <Text style={Styles.buttontext}>COMPRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}