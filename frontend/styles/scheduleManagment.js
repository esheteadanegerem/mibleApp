import { StyleSheet } from "react-native";
export const styles=StyleSheet.create({
    main:{
        backgroundColor:'#cd853f',
        flex:1
    },
    text1:{
        fontSize:30,
        marginTop:20,
        marginStart:12,
        fontWeight:'bold'
          },
        
          main1:{
            flexDirection:'row',
            backfaceVisibility:'hidden',
            borderRadius:15,
            backgroundColor:'white',
            width:'90%',
            marginStart:15
           
          },
          text2:{
           marginTop:8,
           padding:10,
           marginStart:0
          },
          radio1:{
            padding:10
          },
          text3:{
            fontSize:20,
            margin:20,
          },
          imputs:{
            backgroundColor:'white',
            color: 'black',
            paddingBottom: 20,
         marginRight:0,
            borderRadius:20,
            borderStyle:'solid',
            fontSize: 20,
            borderWidth: 1, 
            borderColor: 'black',
            alignSelf:'center',
            width:'95%' ,
            textAlign:'center',
            marginTop:10,
            marginLeft:10
          }
})