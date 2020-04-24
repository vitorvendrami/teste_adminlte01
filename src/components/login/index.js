import React, {useContext}from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Styles from './style'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../../contexts/auth'


export default function Login() {
    const navigation = useNavigation()

    const {signed,signIn,user} = useContext(AuthContext)
    
    function handleSignIn(){
        signIn()
    }
    navigateToCadastro = () => navigation.navigate('Cadastro')

    navigateToFornecedor = () => navigation.navigate('Fornecedor')

    return (
        <View style={Styles.container}>

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