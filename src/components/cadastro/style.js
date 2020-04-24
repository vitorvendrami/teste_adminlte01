import {StyleSheet,Dimensions} from 'react-native'

Styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
        padding: 15,
        justifyContent: 'center'
    },
    maindiv:{
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    input:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        borderRadius: 5,
    },
    text:{
        color: '#337ff2',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 18,
    },
    button:{
        backgroundColor: '#337ff2',
        paddingVertical: 10,
        width: Dimensions.get('window').width/3,
        borderRadius: 5,
        marginTop: 30,
    },
    textB:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputcep:{
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: Dimensions.get('screen').width*(0.6)
    },
    inputn:{
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 5,
        width: Dimensions.get('window').width*(1/5)
    },
    scroll:{
      
    },
})

export default Styles