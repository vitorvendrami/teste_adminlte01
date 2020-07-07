import React, { useState, useContext } from 'react'
import Styles from './style'
import { View, Text, TouchableOpacity } from 'react-native'
import AppContext from '../../../contexts/app'

export default function Product(props) {

    const [amount, setAmount] = useState(0)
    const [show, setShow] = useState(false)


    var total = 0

    const { handleSetTotal, totalCompra } = useContext(AppContext)

    function handleAmount(cod) {
        if (cod === 1) {
            setAmount(amount + 1)

            handleSetTotal(totalCompra + props.price)

        } else if (cod === 2) {
            if (amount > 0) {
                setAmount(amount - 1)
                handleSetTotal(totalCompra - props.price)
                return
            }
        }
    }
    function handleShow() {
        setShow(!show)
    }
    return (
        <>
            <TouchableOpacity onPress={handleShow}>
                <View style={Styles.container}>
                    <View style={Styles.viewitem}>
                        <Text style={Styles.text}>
                            {props.name}
                        </Text>
                    </View>
                    <View style={Styles.viewvalor}>
                        <Text style={Styles.text}>R$ {props.price}</Text>
                    </View>
                    <View style={{ marginRight: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={Styles.button} onPress={() => handleAmount(1)}>
                            <Text style={Styles.buttontext}>+</Text>
                        </TouchableOpacity>
                        <Text style={Styles.tela}>{amount}</Text>
                        <TouchableOpacity style={Styles.button} onPress={() => handleAmount(2)}>
                            <Text style={Styles.buttontext}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {show && !!props.description &&
                    <View>
                        <Text>{props.description}</Text>
                    </View>
                }
            </TouchableOpacity>
        </>
    )
}
