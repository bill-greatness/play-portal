import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    textButton:{
        marginVertical:15,
        backgroundColor:"orange",
        padding:7,
        borderRadius:5,
        width:"100%"
    },
    text:{
        fontSize:16,
        fontFamily:'regular',
        textAlign:'center',
        color:'#fff'
    },
    borderedButton:{
        borderWidth:0.5,
        borderColor:"#ccc",
        padding:10,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    simpleText:{
        fontSize:13, 
        textAlign:'center', 
        color:"#fff",
        fontFamily:'regular'
    }
})