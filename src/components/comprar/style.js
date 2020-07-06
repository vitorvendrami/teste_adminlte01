import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        flex: 1,
    },
    viewlista: {
        height:400,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#337ff2',
        backgroundColor: '#FFF',
    },
    viewtotal:{
        padding: 5,
        marginTop: 10,
        justifyContent: 'flex-start',
    },
    textTotal:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',

      
    },
    button: {
        backgroundColor: '#337ff2',
        padding: 5,
        width: 120,
        marginTop: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
})
export default Styles