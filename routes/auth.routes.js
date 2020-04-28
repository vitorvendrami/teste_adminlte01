import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../src/components/login/index'
import Cadastro from '../src/components/cadastro/index'
import Fornecedor from '../src/components/fornecedores/index'

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login}
            options={{
                headerShown: false
            }} />
        <AuthStack.Screen name="Cadastro" component={Cadastro}
            options={{
                headerStyle: {
                    backgroundColor: '#337ff2',
                },
                headerTintColor: '#FFF',
            }} />
        <AuthStack.Screen name="Fornecedor" component={Fornecedor}
            options={{
                headerStyle: {
                    backgroundColor: '#337ff2',
                },
                headerTintColor: '#FFF',
            }} />

    </AuthStack.Navigator>
)

export default AuthRoutes