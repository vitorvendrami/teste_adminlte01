import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'

let items = [{ nome: 'Água', valor: 20 }, { nome: 'Gás', valor: 10, }]

export default class Lista extends Component {

    state = {
        valores: items.map(valor => 0),
        total: 0,
    }

    estado = { ...this.state }

    posicao = (item) => items.indexOf(item)
    onChange = () =>{
        return this.state.total
    }
    alterar = (item, cod) => {
        const pos = this.posicao(item)

        if (cod === 1) {
            this.estado.valores[pos]++
            this.estado.total += items[pos].valor
        }
        else {
            if (this.estado.valores[pos] > 0) {
                this.estado.valores[pos]--
                this.estado.total-=items[pos].valor
            }
            else {
                return
            }
        }

        this.setState(this.estado)
    }
    limpar = (item) => {
        const pos = this.posicao(item)
        
        this.estado.total-=(this.estado.valores[pos]*items[pos].valor)
        this.estado.valores[pos] = 0


        this.setState(this.estado)
    }
    render() {

        return (
            items.map(item => {
                return (
                    <View style={Styles.view} key={item}>
                        <View style={Styles.container}>
                            <View style={Styles.view}>
                                <View style={Styles.viewitem}>
                                    <Text style={Styles.text}>
                                        {item.nome}{this.state.total}</Text>
                                </View>
                                <View style={Styles.viewvalor}>
                                    <Text style={Styles.text}>R$ {item.valor}</Text>
                                </View>
                                <View style={[Styles.view, { paddingHorizontal: 10 }]}>
                                    <TouchableOpacity style={Styles.button} onPress={() => this.alterar(item, 1)}>
                                        <Text style={Styles.buttontext}>+</Text>
                                    </TouchableOpacity>

                                    <Text style={Styles.tela}>{this.state.valores[this.posicao(item)]}</Text>
                                    <TouchableOpacity style={Styles.button} onPress={() => this.alterar(item, 0)}>
                                        <Text style={Styles.buttontext}>-</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => this.limpar(item)} >
                                    <View style={Styles.viewdelete}>
                                        <Icon name='delete' size = {25} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            })
        )
    }
}