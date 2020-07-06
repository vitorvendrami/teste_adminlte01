import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../../../../contexts/app'
import { Products } from '../../../../services/products'
import Product from '../../Product/index'
import { createIconSetFromFontello } from 'react-native-vector-icons'

export default Lista = () => {

    async function Prov() {
        const servico = await Products()
        setInfo(servico.info)
    }
    useEffect(() => {
        Prov()
    }, [])

    const { providerName } = useContext(AppContext)
    const [info, setInfo] = useState([])
    const filtrado = info.filter(item => item.seller === providerName)
    console.log(filtrado)
    console.log(info)
    console.log(providerName)
    
    return (
        filtrado.map(info =>{
                return (
                    <Product name = {info.name} price = {info.price} key ={info.id}/>
                )
            })
        )
}

 