import { StyleSheet } from "react-native";
const styles=StyleSheet.create(({
    container: {
  
        flex: 1,
     width: '100%',
    backgroundColor: '#ccc',
      
      },
      container1:{
         
        flexDirection:'row',
        alignContent:'flex-end',
        height:150,
        backgroundColor:'#808080'
        

      },
      inner:{
       margin:10,
       width:200,
       alignItems:'center',
     
      },
      inner1:{
        fontSize:30,
        textTransform:'capitalize',
      color:'#008000'
      },
      
      button: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal:10,
        borderRadius: 5,
        margin:10,
        marginHorizontal: 5,
        alignContent:'center',
        alignItems:'flex-end',
  
      },

      buttonText: {
        color: 'white',
        fontSize: 40,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      container2:{
        marginTop:1,
        alignContent:'flex-start',
        width:'100%'
      },
      images:{
        width:'100%',
        height:'100%'

      },
      imagetext:{
        fontSize:40,
        fontStyle:'italic',
        fontWeight:'500',
        color:'#b22222'

      },
      image1:{
        height:200,
        marginStart:50
      }

      
}))
export default styles