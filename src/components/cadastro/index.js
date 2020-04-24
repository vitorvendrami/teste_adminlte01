import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Styles from './style'
import { useNavigation } from '@react-navigation/native'
import Cabecalho from '../cabecalho/index'
import AsyncStorage from '@react-native-community/async-storage'

export default function Cadastro() {

    const navigation = useNavigation()
    function navigateToFornecedor() {
        navigation.navigate('Fornecedor')
    }

    const [state, setState] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        street: '',
        neighbor: '',
        number: '',
        CEP: '',
    })
    const valid = () =>{
        let res = false 
        if(state.password !== state.confirmPassword){
            res = false 
        }else{
            res = true 
        }
        return res
    }
    const botao = () =>{
       if(valid() === false){
           alert('Dados incorretos')
       }else{
            AsyncStorage.setItem('Cadastro',JSON.stringify(state))
            navigateToFornecedor()
       }
    }
    const estado = { ...state }

    return (
        <View style={Styles.container}>
            <Cabecalho title='Cadrastro' />
            <View style={{ height: 350, paddingVertical: 10 }}>
                <ScrollView style={Styles.scroll}>
                    <View style={Styles.maindiv}>
                        <Text style={Styles.text}>Nome Completo</Text>
                        <TextInput style={Styles.input} value={state.name} onChangeText={name => setState({ ...state, name })} />
                        <Text style={Styles.text}>Senha</Text>
                        <TextInput style={Styles.input} onChangeText={password => setState({ ...state, password })} />
                        <Text style={Styles.text}>Confirmar Senha</Text>
                        <TextInput style={Styles.input} onChangeText={confirmPassword => setState({ ...state, confirmPassword })} />
                        <Text style={Styles.text}>Email</Text>
                        <TextInput style={Styles.input} onChangeText={email => setState({ ...state, email })} />
                        <Text style={Styles.text}>Rua</Text>
                        <TextInput style={Styles.input} onChangeText={street => setState({ ...state, street })} />
                        <Text style={Styles.text}>Bairro</Text>
                        <TextInput style={Styles.input} onChangeText={neighbor => setState({ ...state, neighbor })} />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={Styles.viewcepn}>
                                <Text style={Styles.text}>N°</Text>
                                <TextInput style={Styles.inputn} keyboardType='numeric'
                                    onChangeText={number => setState({ ...state, number })} />
                            </View>
                            <View style={Styles.viewcepn}>
                                <Text style={Styles.text}>CEP</Text>
                                <TextInput style={Styles.inputcep}
                                    onChangeText={CEP => setState({ ...state, CEP })} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={Styles.button} onPress={botao} >
                    <Text style={Styles.textB}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}