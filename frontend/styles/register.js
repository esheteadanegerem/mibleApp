import { StyleSheet } from "react-native";
export const styles=StyleSheet.create({
    main:{
      backgroundColor:'#f8f8ff',
      flex:1,
      paddingTop:20,
    
      width:"100%"
  
    },
    buttons: {
    width:'95%',
      borderRadius:15,
      backgroundColor: 'blue', 
      fontSize:10,
      alignItems:'center',
      padding:15,
      marginTop:20,
      marginLeft:10

    },

    label: {
     backgroundColor:'white',
      color: 'black',
      paddingBottom: 20,
   marginRight:0,
      borderRadius:20,
      borderStyle:'solid',
      fontSize: 30,
      borderWidth: 1, 
      borderColor: 'black',
      alignSelf:'center',
      width:'95%' ,
      textAlign:'center',
      marginTop:10,
      marginLeft:10
  
    },
    forms:{
        marginTop:60,
        marginStart:30,
        backgroundColor:'#a9a9a9',
        width:'85%',
       
        height:'80%',
        borderRadius:15

    },
    texts:{
        fontSize:35,
        marginStart:10
        
    },
    names:{
        marginStart:10,
        fontSize:24,
        marginTop:13,
        marginBottom:0
    },
    end:{
        marginBottom:10,
        marginStart:20,
        marginTop:40,
        alignSelf:'center',
        fontWeight:'bold'
    },
    reg:{
        fontSize:26,
        fontWeight:'bold'
    }
    
  })