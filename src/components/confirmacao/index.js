import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './style'
import { RadioButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
export default function Confirmar(props) {

    const [state,setState] = useState({})

    /*useEffect(() =>
        async function () {
            const estado = await AsyncStorage.getItem('Cadastro')
            JSON.parse(estado)
            setState(estado)
            alert(estado.street)
        },[])*/



    const navigation = useNavigation()
    const [selectedMoney, setSelectedMoney] = useState('checked');
    const [selectedCard, setSelectedCard] = useState('unchecked');

    navigateToEndereco = () => navigation.navigate('Endereco')
    navigateToComprar = () => navigation.navigate('Comprar')

    const setMoney = () => {
        if (selectedMoney === 'unchecked') {
            setSelectedMoney('checked')
            setSelectedCard('unchecked')
        }
    }
    const setCard = () => {
        if (selectedCard === 'unchecked') {
            setSelectedMoney('unchecked')
            setSelectedCard('checked')
        }
    }

    return (
        <View style={Styles.container}>
            <Cabecalho title='Confirmação' />
            <View style={Styles.viewmaisexterna}>
                <View style={Styles.viewexterna}>
                    <View style={Styles.viewdivisao}>
                        <Text style={Styles.text}>Endereço</Text>
                        <TouchableOpacity>
                            <Text style={Styles.text} onPress={navigateToEndereco}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.viewAdress}>
                    <Text style={Styles.adressText}>Rua: {state.street}</Text>
                    <Text style={Styles.adressText}>Número:</Text>
                    <Text style={Styles.adressText}>Bairro:</Text>
                    <Text style={Styles.adressText}>CEP:</Text>
                </View>
                <View style={Styles.viewexterna}>
                    <View style={Styles.viewdivisao}>
                        <Text style={Styles.text}>Pedido</Text>
                        <TouchableOpacity>
                            <Text style={Styles.text} onPress={navigateToComprar}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.viewOrder}>
                    <Text style={Styles.orderText}>Teste</Text>
                </View>
                <View style={Styles.viewexterna}>
                    <Text style={Styles.text}>Forma de pagamento</Text>
                </View>
                <View style={Styles.viewPayment}>
                    <View style={Styles.radio}>
                        <RadioButton status={selectedMoney}
                            onPress={() => setMoney()} color="#337ff2" />
                        <Text style={Styles.text}>Dinheiro</Text>
                    </View>
                    <View style={Styles.radio}>
                        <RadioButton status={selectedCard}
                            onPress={() => setCard()} color="#337ff2" />
                        <Text style={Styles.text}>Cartão</Text>
                    </View>
                </View>
                <View style={Styles.viewexterna}>
                    <Text style={Styles.text}>Total:</Text>
                </View>
            </View>
            <TouchableOpacity style={Styles.button}>
                <Text style={Styles.textB}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    )
}