import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AppContext from '../../../../contexts/app'

let items = [{ nome: 'Água', valor: 20 }, { nome: 'Gás', valor: 10, }]

export default Lista = () => {

    const { handleSetTotal, totalCompra } = useContext(AppContext)

    const [state, setState] = useState({
        valores: items.map(valor => 0),
        total: 0,
    })


    estado = { ...state }

    posicao = (item) => items.indexOf(item)

    alterar = (item, cod) => {
        const pos = posicao(item)

        if (cod === 1) {
            estado.valores[pos]++
            estado.total += items[pos].valor


        }
        else {
            if (estado.valores[pos] > 0) {
                estado.valores[pos]--
                estado.total -= items[pos].valor

            }
            else {
                return
            }
        }

        setState(estado,handleSetTotal(estado.total))
        
    }
    limpar = (item) => {
        const pos = posicao(item)

        estado.total -= (estado.valores[pos] * items[pos].valor)
        estado.valores[pos] = 0

        setState(estado,handleSetTotal(estado.total))
    
    }

    return (
        items.map(item => {
            return (
                <View style={Styles.view} key={Math.random()}>
                    <View style={Styles.container}>
                        <View style={Styles.view}>
                            <View style={Styles.viewitem}>
                                <Text style={Styles.text}>
                                    {item.nome}</Text>
                            </View>
                            <View style={Styles.viewvalor}>
                                <Text style={Styles.text}>R$ {item.valor}</Text>
                            </View>
                            <View style={[Styles.view, { paddingHorizontal: 10 }]}>
                                <TouchableOpacity style={Styles.button} onPress={() => alterar(item, 1)}>
                                    <Text style={Styles.buttontext}>+</Text>
                                </TouchableOpacity>

                                <Text style={Styles.tela}>{state.valores[posicao(item)]}</Text>
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

}