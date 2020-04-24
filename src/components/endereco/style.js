import {StyleSheet,Dimensions} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainview:{
        backgroundColor: '#FFF',
        padding: 20,
        justifyContent: 'center',
        marginTop: -30,
        borderColor: '#337ff2',
        borderWidth: 2,
    },
    input:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        borderRadius: 5,
    },
    inputcep:{
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: Dimensions.get('screen').width*(1/2)
    },
    inputn:{
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 5,
        width: Dimensions.get('window').width*(1/5)
    },
    viewcepn:{
        marginRight: 15,
        alignItems:'flex-start',
        justifyContent: 'flex-start',
    },
    text:{
        color: '#337ff2',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 20,
    },
    button:{
        backgroundColor: '#337ff2',
        paddingVertical: 10,
        width: Dimensions.get('window').width/3,
        borderRadius: 5,
        marginTop: 40,
    },
    textB:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
})

export default Styles