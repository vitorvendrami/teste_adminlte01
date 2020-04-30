import React, { useState, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AppContext from '../../../../contexts/app'
import { Provider } from '../../../../services/provider'

let items = [{ nome: 'Água', valor: 20 }, { nome: 'Gás', valor: 10, }]

export default Lista = () => {

    async function Prov() {
        const servico = await Provider()
        setInfo(servico.info)
    }
    useEffect(() => {
        Prov()
    }, [])

    const { handleSetTotal, providerName } = useContext(AppContext)
    const [info, setInfo] = useState([])
    const filtrado = info.filter((info) => info.name === providerName)
    const filtrado2 = filtrado.map(info => info.products)
    const [state, setState] = useState({
        valores: filtrado2.map(filtro=>0),
        total: 0,
    })



    estado = { ...state }

    posicao = (item) => filtrado2.indexOf(item)

    alterar = (item, cod) => {
        const pos = posicao(item)

        if (cod === 1) {
            estado.valores[0]++
            estado.total += filtrado2[0].price


        }
        else {
            if (estado.valores[0] > 0) {
                estado.valores[0]--
                estado.total -= filtrado2[0].price

            }
            else {
                return
            }
        }

        setState(estado, handleSetTotal(estado.total))

    }
    limpar = (item) => {
        const pos = posicao(item)

        estado.total -= (estado.valores[pos] * filtrado2[pos].price)
        estado.valores[pos] = 0

        setState(estado, handleSetTotal(estado.total))

    }
    console.log(filtrado)
    console.log(filtrado2)
    console.log(state.valores[0])
    return (
        filtrado2.map(info =>
            info.map(item => {
                return (
                    <View style={Styles.view} key={Math.random()}>
                        <View style={Styles.container}>
                            <View style={Styles.view}>
                                <View style={Styles.viewitem}>
                                    <Text style={Styles.text}>
                                        {item.name}</Text>
                                </View>
                                <View style={Styles.viewvalor}>
                                    <Text style={Styles.text}>R$ {item.price}</Text>
                                </View>
                                <View style={[Styles.view, { paddingHorizontal: 10 }]}>
                                    <TouchableOpacity style={Styles.button} onPress={() => alterar(item, 1)}>
                                        <Text style={Styles.buttontext}>+</Text>
                                    </TouchableOpacity>

                                    <Text style={Styles.tela}>{state.valores[1]}</Text>
                                    <TouchableOpacity style={Styles.button} onPress={() => alterar(item, 0)}>
                                        <Text style={Styles.buttontext}>-</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => limpar(item)} >
                                    <View style={Styles.viewdelete}>
                                        <Icon name='delete' size={25} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            })
        )
    )
}