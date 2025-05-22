import React from 'react';
import {Text,View,StyleSheet} from 'react-native';


const DATA = [
  {id:"1", name:"ahte"},
  {id:"2", name:"ahmad"},
  {id:"3", name:"aman"},
  {id:"4", name:"akash"},
  {id:"5", name:"a"},
  {id:"6", name:"am"},
  {id:"7", name:"ama"},
  {id:"8", name:"man"},
  {id:"9", name:"an"},
  {id:"10", name:"n"},
  {id:"11", name:"nan"},
  {id:"12", name:"waman"},
  {id:"13", name:"sman"},
  {id:"14", name:"rman"},
  {id:"15", name:"raman"},
  {id:"16", name:"paman"},
  {id:"17", name:"saman"},
]


    
  /*<View>
    <Text style={[styles.container,styles.otherStyles,{backgroundColor:"pink"}]}>Welcome to Android</Text>
  </View>
  )
};

const styles=StyleSheet.create({
  container:{
    fontSize:25,
    fontWeight:"bold",
    color:"green"
  },
  otherStyles:{
   backgroundColor:"black" 
  }
})
{DATA.map(item => <Text key={item.id}>{item.name}</Text>)}

<Button title="clickme" color="purple"
onPress={myAlert}/>

data={DATA}
  renderItem={(item)=><Text key1={item.id}>{item.name}</Text>}
  ShowVerticalScrollIndicator={false}
  onRefresh={()=>console.log(object)}
  <Pressable 
onPress={() => console.log("onPressed")}
onPressIn={() => console.log("PressIn")}
onPressOut={() =>console.log("PressOut")}>
  <Text style={{fontSize:30}}>I am Pressble</Text>
  <Image source={{uri : "https://blixtdev.com/content/images/2023/01/1-4bIsUtmfOQD45_2dt_Of5Q.png"}} style={{height:400,width:400}} />
  
</Pressable>
<ImageBackground source ={require('./assets/React.jpg')} style={{height:350,width:350}}>
  <Text>React logo</Text>
  </ImageBackground>
*/

const App = () => {
  return(
<Text style={styles.textbox}>hello</Text>
)}

const styles=StyleSheet.create({
  textbox:{
color:'red',
backgroundColor:'blue',
  }
})
  






export default App;