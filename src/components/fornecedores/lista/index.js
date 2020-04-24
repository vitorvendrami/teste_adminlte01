import React, { Component } from 'react'
import Styles from './style'
import { RadioButton } from 'react-native-paper'
import { Text, View } from 'react-native'

const fornecedores = ["Fornecedor 1", "Fornecedor 2", "Fornecedor 3", "Fornecedor 4","Fornecedor 5"]
export default class Lista extends Component {
    state = {
        checked: ''
    }
    render() {
        const { checked } = this.state
        return (
            fornecedores.map(
                fornecedor => {
                    return (
                        <View style={Styles.mainview} key = {fornecedor}>
                            <RadioButton
                                value={fornecedor}
                                status={checked === fornecedor ? 'checked' : 'unchecked'}
                                onPress={() => this.setState({ checked: fornecedor })}
                                color='#337ff2'
                                uncheckedColor='#337ff2'
                            />
                            <Text style = {Styles.text}>{fornecedor}</Text>
                        </View>
                    )
                }
            )

        )
    }
}