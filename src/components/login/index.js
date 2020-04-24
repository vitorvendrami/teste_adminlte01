import React from 'react'
import {SignIn} from '../../../services/auth'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Styles from './style'
import { useNavigation } from '@react-navigation/native'
import Cabecalho from '../cabecalho/index'


export default function Login() {
    const navigation = useNavigation()
    async function handleSignIn(){
        const response = await SignIn()

        console.log(response)
    }
    navigateToCadastro = () => navigation.navigate('Cadastro')

    navigateToFornecedor = () => navigation.navigate('Fornecedor')

    return (
        <View style={Styles.container}>
             <Cabecalho title ='LOGIN'/>

            <Text style={Styles.text}>EMAIL</Text>
            <TextInput style={Styles.input} />
            <Text style={Styles.text}>SENHA</Text>
            <TextInput style={Styles.input} />

            <View style = {{marginLeft:220}}>
                <TouchableOpacity  onPress={navigateToCadastro}>
                    <Text>CADASTRAR</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={Styles.button} onPress={handleSignIn}>
                    <Text style={Styles.textB}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}