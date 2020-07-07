import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../../../../contexts/app'
import { Products } from '../../../../services/products'
import Product from '../../Product/index'

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
    
    return (
        filtrado.map(info =>{
                return (
                    <Product 
                    name = {info.name} 
                    price = {info.price} 
                    description = {info.description} 
                    key ={info.id}
                    />
                )
            })
        )
}

 