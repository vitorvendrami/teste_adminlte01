import {StyleSheet,Dimensions,StatusBar} from 'react-native'

const styles = StyleSheet.create({
    view:{
        backgroundColor: 'rgba(51,127,242,0.6)',
        position: 'absolute',
        top: 0,
        width: Dimensions.get('screen').width,
        height: 20+StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
        paddingBottom:StatusBar.currentHeight+15,
        alignItems: 'center',
    },
    text:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
    }
})

export default styles