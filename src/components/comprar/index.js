import React, { useState,useContext} from 'react'
import AppContext from '../../../contexts/app'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Styles from './style'
import Lista from './lista/index'
import { useNavigation } from '@react-navigation/native'

export default function Comprar() {

    
    const {totalCompra} = useContext(AppContext)
   
    const navigation = useNavigation()

    
    navigateToConfirmar = () => navigation.navigate('Confirmação')

    return (
        <View style={Styles.container}>
            <View style={{ marginTop: 100, alignItems: 'center' }}>
                <View style={Styles.viewlista}>
                    <ScrollView>
                        <Lista />
                    </ScrollView>
                </View>
                <View style={Styles.viewtotal}>
                    <Text style={Styles.textTotal}>Total: R$ {totalCompra} </Text>
                </View>
                <TouchableOpacity style={Styles.button} onPress={navigateToConfirmar}>
                    <Text style={Styles.buttontext}>COMPRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}