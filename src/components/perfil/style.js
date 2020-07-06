import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#f5f4f2',
        flex: 1,
        padding:30,
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
    mainDiv:{
        backgroundColor:  '#337ff2',
        padding: 20,
        borderRadius: 15,
    },
    text:{
        color: '#FFF',
        fontSize: 20,
    }
})

export default styles