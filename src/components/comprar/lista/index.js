import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../../../../contexts/app'
import { Provider } from '../../../../services/provider'
import Product from '../../Product/index'

export default Lista = () => {

    async function Prov() {
        const servico = await Provider()
        setInfo(servico.info)
    }
    useEffect(() => {
        Prov()
    }, [])

    const { providerName } = useContext(AppContext)
    const [info, setInfo] = useState([])
    const filtrado = info.filter((info) => info.name === providerName).map(info=>info.products)
    
   
    return (
        filtrado.map(info =>
            info.map(item => {
                return (
                    <Product name = {item.name} price = {item.price} key ={item.id}/>
                )
            })
        )
    )
}

 