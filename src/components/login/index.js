import React, { useContext, useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Animated, Keyboard } from 'react-native'
import Styles from './style'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../../contexts/auth'


export default function Login() {
    const navigation = useNavigation()

    const { signIn } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [logo] = useState(new Animated.ValueXY({ x: 192, y: 192 }))

    async function handleSignIn() {
        await signIn(email)
    }

    useEffect(() => {
        keyboarDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        keyboadDidHideListener = Keyboard.addListener('keyboardDidHide', keyBoardDidHide)
    }, [])

    navigateToCadastro = () => navigation.navigate('Cadastro')
    navigateToFornecedor = () => navigation.navigate('Fornecedor')

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 80,
                duration: 80,
                useNativeDriver: false,
            }),
            Animated.timing(logo.y, {
                toValue: 80,
                duration: 80,
                useNativeDriver: false,
            })
        ]).start()
    }
    function keyBoardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 192,
                duration: 80,
                useNativeDriver: false,
            }),
            Animated.timing(logo.y, {
                toValue: 192,
                duration: 80,
                useNativeDriver: false,
            })
        ]).start()
    }
    return (

        <View style={Styles.container}>
            <View style={Styles.imageView}>
                <Animated.Image
                    source={require('../../assets/iconround.png')}
                    style={{ width: logo.x, height: logo.y }}
                />
            </View>
            <View style={Styles.mainView}>

                <Text style={Styles.text}>EMAIL</Text>
                <TextInput style={Styles.input} onChangeText={item => setEmail(item)} />
                <Text style={Styles.text}>SENHA</Text>
                <TextInput style={Styles.input} />


                <TouchableOpacity style={Styles.button} onPress={handleSignIn}>
                    <Text style={Styles.textB}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateToCadastro}>
                    <Text style = {{color:'white'}}>CADASTRAR</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}