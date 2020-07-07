import { StyleSheet,Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    divlista:{
        height:250,
        borderWidth: 2,
        borderColor: "#337ff2",
        borderRadius: 10,
        marginTop: 10,
        padding: 5,
    },
    text: {
        color: '#337ff2',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 18,
        paddingBottom: 5,
    },
    button: {
        marginTop: 20,
        color: '#FFF',
        backgroundColor: '#337ff2',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        width: Dimensions.get('window').width/3,
        borderRadius: 10,
    },
})


export default Styles