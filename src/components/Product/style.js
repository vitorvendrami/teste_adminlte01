import { StyleSheet,Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#337ff2',
        borderBottomWidth: 2,
        padding: 5,
        paddingHorizontal: 10,
        marginBottom: 5,
        width: Dimensions.get('screen').width,
    },
    viewitem: {
        width: 135,
        alignItems: 'flex-start',
        backgroundColor: '#FFF',
    },
    viewvalor:{
        width: 120,
        alignItems: 'flex-end',
    },
    viewdelete: {
        backgroundColor: 'white',
        padding: 5,
        borderWidth: 2,
        borderColor: '#337ff2',
        borderRadius: 5
    },
    text: {
        fontSize: 25,
        color: 'black',
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#FFF',
        width: 30,
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#337ff2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontext: {
        color: 'black',
        fontSize: 30,
        fontWeight:'bold',
    },
    tela: {
        fontSize: 30,
        color: 'black',
        paddingHorizontal: 10,
    },
})


export default Styles