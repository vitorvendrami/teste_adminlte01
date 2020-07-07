import React, { useState, useEffect, useContext } from 'react'
import Styles from './style'
import { RadioButton } from 'react-native-paper'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Provider } from '../../../../services/provider'
import AppContext from '../../../../contexts/app'


export default function Lista(props) {

    async function Prov() {
        const servico = await Provider()
        setInfo(servico.info)
    }
    useEffect(() => {
        Prov().then(setloading(false))
    }, [])

    const [info, setInfo] = useState([])
    const [check, setCheck] = useState('')
    const { handleSetProvider } = useContext(AppContext)
    const [isloading, setloading] = useState(true)

    function button(provider) {

        setCheck(provider)
        handleSetProvider(provider)
    }
    let items = info.map(provider => {
        return (
            <TouchableOpacity onPress={() => button(provider.name)} style={Styles.mainview} key={provider.id}>

                <RadioButton
                    value={provider.name}
                    status={check === provider.name ? 'checked' : 'unchecked'}
                    color='#337ff2'
                    uncheckedColor='#337ff2'
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={Styles.text}>Nome: {provider.name}</Text>
                    <View>
                        <Text style={Styles.text}>Endereço:</Text>
                        <Text style={Styles.text}>Rua: {provider.adress.street}</Text>
                        <Text style={Styles.text}>Número: {provider.adress.num}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    })

    return (
        <>
        { items }
        </>
    )

}
