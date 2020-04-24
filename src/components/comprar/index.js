import React, { useState,useContext} from 'react'
import AuthContext from '../../../contexts/auth'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Styles from './style'
import Lista from './lista/index'
import { useNavigation } from '@react-navigation/native'
import Cabecalho from '../cabecalho/index'

export default function Comprar() {

    let valor
    const [state,setState] = useState({
        total: '0',
    }) 

    const {signOut} = useContext(AuthContext)

    const navigation = useNavigation()

    const changeState = (valor)=>{
        setState({total: valor})
    }
    navigateToConfirmar = () => navigation.navigate('Confirmar')

    return (
        <View style={Styles.container}>
            <Cabecalho title='Comprar' />
            <View style={{ marginTop: 100, alignItems: 'center' }}>
                <View style={Styles.viewlista}>
                    <ScrollView>
                        <Lista onChange = {valor} />
                    </ScrollView>
                </View>
                <View style={Styles.viewtotal}>
                    <Text style={Styles.textTotal}>Total: R$ {valor} </Text>
                </View>
                <TouchableOpacity style={Styles.button} onPress={()=>{}}>
                    <Text style={Styles.buttontext}>COMPRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}