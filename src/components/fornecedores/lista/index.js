import React, { useState, useEffect,useContext} from 'react'
import Styles from './style'
import { RadioButton } from 'react-native-paper'
import { Text, View } from 'react-native'
import { Provider } from '../../../../services/provider'
import AppContext from '../../../../contexts/app'


export default function Lista() {

    async function Prov() {
        const servico = await Provider()
        setInfo(servico.info)
    }
    useEffect(() => {
        Prov()
    }, [])

    const [info, setInfo] = useState([])
    const [check, setCheck] = useState('')
    const {handleSetProvider} = useContext(AppContext)

    function button(provider){
        setCheck(provider)
        handleSetProvider(provider)
    }

    return (
        info.map(
            fornecedor => {
                return (
                    <View style={Styles.mainview} key={fornecedor.id}>
                        <RadioButton
                            value={fornecedor.name}
                            status={check === fornecedor.name ? 'checked' : 'unchecked'}
                            onPress={() => button(fornecedor.name)}
                            color='#337ff2'
                            uncheckedColor='#337ff2'
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.text}>Nome: {fornecedor.name}</Text>
                            <View>
                                <Text style={Styles.text}>Endereço:</Text>
                                <Text style={Styles.text}>Rua: {fornecedor.adress.street}</Text>
                                <Text style={Styles.text}>Número: {fornecedor.adress.num}</Text>
                            </View>
                        </View>

                    </View>
                )
            }
        )
    )
}
