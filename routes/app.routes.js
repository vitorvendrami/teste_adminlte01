import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import Endereco from '../src/components/endereco/index'
import Comprar from '../src/components/comprar/index'
import Confirmar from '../src/components/confirmacao/index'
import Teste from '../src/components/login/teste-view'
import Perfil from '../src/components/perfil/index'


const AppStack = createStackNavigator();

export default AppRoutes = () => {

    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Comprar" component={Comprar}
                options={{
                    headerRightContainerStyle: {
                        paddingRight: 20,
                    },
                    headerRight: () => <Teste />,
                    headerStyle: {
                        backgroundColor: '#337ff2',
                    },
                    headerTintColor: '#FFF',
                }} />
            <AppStack.Screen name="Confirmação" component={Confirmar}
                options={{
                    headerStyle: {
                        backgroundColor: '#337ff2',
                    },
                    headerTintColor: '#FFF',
                }} />
            <AppStack.Screen name="Perfil" component={Perfil} />
        </AppStack.Navigator>
    )
}

