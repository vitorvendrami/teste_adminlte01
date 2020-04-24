import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Styles from './style'
import { useNavigation } from '@react-navigation/native'
import Cabecalho from '../cabecalho/index'
export default Endereco = props => {

    const [state,setState] = useState({
        rua: '',
        bairro: '',
        num: 0,
        CEP: '',
    })
    
    let estado = state

    const navigation = useNavigation();

    navigateToComprar = () => navigation.navigate('Fornecedor')

    return (
        <View style={Styles.container} >
            <Cabecalho title = 'Cadastro'/>
            <View style={Styles.mainview}>
                <Text style={Styles.text}>Rua</Text>
                <TextInput style={Styles.input} onChangeText={rua => setState({rua})} />
                <Text style={Styles.text}>Bairro</Text>
                <TextInput style={Styles.input} onChangeText={bairro => setState({bairro})} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={Styles.viewcepn}>
                        <Text style={Styles.text}>N°</Text>
                        <TextInput style={Styles.inputn} keyboardType='numeric'
                            onChangeText={num => setState({num})} />
                    </View>
                    <View style={Styles.viewcepn}>
                        <Text style={Styles.text}>CEP</Text>
                        <TextInput style={Styles.inputcep}
                            onChangeText={CEP => setState({CEP})} />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={Styles.button} onPress={navigateToComprar}>
                <Text style={Styles.textB}>CONFIRMAR</Text>
            </TouchableOpacity>
        </View>
    )
}


