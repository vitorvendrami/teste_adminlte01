import React from 'react'
import {View,Text} from 'react-native'
import styles from './style'
export default function Cabecalho(props){
    return(
        <View style = {styles.view}>
            <Text style = {styles.text}>{props.title}</Text>
        </View>
    )
}