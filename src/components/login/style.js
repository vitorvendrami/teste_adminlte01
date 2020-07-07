import { StyleSheet, Dimensions } from 'react-native'


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1b262c',
        borderWidth: 2,
        borderColor: '#337ff2',
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainView: {
        paddingBottom: 150,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        marginBottom: 10,
        width: 300,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 3,
    },
    text: {
        color: '#FFF',
        paddingVertical: 5,
        textAlign: 'center',
        backgroundColor: '#337ff2',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 20,
        width: 300,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,

    },
    button: {
        backgroundColor: '#337ff2',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        width: Dimensions.get('window').width / 3
    },
    textB: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },

})

export default Styles