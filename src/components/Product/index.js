import React, { useState, useContext } from 'react'
import Styles from './style'
import { View, Text, TouchableOpacity } from 'react-native'
import AppContext from '../../../contexts/app'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Product(props) {

    const [amount, setAmount] = useState(0)
    var total = 0

    const { handleSetTotal, totalCompra } = useContext(AppContext)

    function handleAmount(cod) {
        if (cod === 1) {
            setAmount(amount + 1)
           
            handleSetTotal(totalCompra+props.price)

        } else if (cod === 2) {
            if (amount > 0) {
                setAmount(amount - 1)
                handleSetTotal(totalCompra - props.price)
                return
            }
        } else {
            if (amount > 0) {
                handleSetTotal(totalCompra - (props.price * amount))
                setAmount(0);
            }
        }
    }
    return (
        <View style={Styles.view}>
            <View style={Styles.container}>
                <View style={Styles.view}>
                    <View style={Styles.viewitem}>
                        <Text style={Styles.text}>
                            {props.name}
                        </Text>
                    </View>
                    <View style={Styles.viewvalor}>
                        <Text style={Styles.text}>R$ {props.price}</Text>
                    </View>
                    <View style={[Styles.view, { paddingHorizontal: 10 }]}>
                        <TouchableOpacity style={Styles.button} onPress={() => handleAmount(1)}>
                            <Text style={Styles.buttontext}>+</Text>
                        </TouchableOpacity>

                        <Text style={Styles.tela}>{amount}</Text>
                        <TouchableOpacity style={Styles.button} onPress={() => handleAmount(2)}>
                            <Text style={Styles.buttontext}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleAmount(3)} >
                        <View style={Styles.viewdelete}>
                            <Icon name='delete' size={25} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
