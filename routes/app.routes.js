import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Fornecedor from '../src/components/fornecedores/index'
import Endereco from '../src/components/endereco/index'
import Comprar from '../src/components/comprar/index'
import Confirmar from '../src/components/confirmacao/index' 

const AppStack = createStackNavigator();

const AppRoutes = ()=>(
    <AppStack.Navigator>
        <AppStack.Screen name = "Comprar" component = {Comprar} />
    </AppStack.Navigator>
)

export default AppRoutes