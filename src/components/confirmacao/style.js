import { StyleSheet ,Dimensions} from 'react-native'

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#f5f4f2',
        flex: 1,
    },
    viewdivisao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewAdress: {
        backgroundColor: 'rgba(51,127,242,0.6)',
        width: 300,
        padding: 5,
    },
    viewOrder: {
        backgroundColor: 'rgba(51,127,242,0.6)',
        width: 300,
        padding: 5,
    },
    viewexterna: {
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    viewPayment: {
        alignItems: 'flex-start',
        width: 250,
    },
    viewmaisexterna: {
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#337ff2',
        padding: 10,
        marginTop: 50,
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
        backgroundColor: '#FFF',
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    adressText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    orderText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
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