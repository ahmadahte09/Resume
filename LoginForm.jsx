import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image,TouchableOpacity,flex, Alert} from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
// import SplashScreen from 'react-native-splash-screen';


// import { CountryPicker } from "react-native-country-codes-picker";
// import { FloatingLabelInput } from 'react-native-floating-label-input';






export default function LoginForm() {

  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [storedMobileNumber, setStoredMobileNumber] = useState('');

   useEffect(() => {
    getStoredMobileNumber();
  }, []);

  // useEffect(() => {
  // SplashScreen.hide();
  // }, []);

  
  const saveMobileNumber = async () => {
    try {
      await AsyncStorage.setItem('MobileNumber', mobileNumber);
      Alert.alert('Success', 'MobileNumber saved!');
      getStoredMobileNumber();
    } catch (error) {
      Alert.alert('Error', 'Failed to save the MobileNumber.');
    }
  };

  
  const getStoredMobileNumber = async () => {
    try {
      const value = await AsyncStorage.getItem('MobileNumber');
      if (value !== null) {
        setStoredMobileNumber(value);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load the MobileNumber.');
    }
  };
  

 


  return (
    <View style={styles.container}>
      <View>
        <Image source={require('./assets/loginimage.png')}
          style={styles.image}
        />
      </View>

      


      <View>
        <Text style={styles.header}> Login Form{show}</Text>
      </View>
      <Text style={styles.text}>Enter your mobile number</Text>

      <View style={styles.main}>

       <View style={styles.country}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{
            width: 60,
            height: 40,
           
            backgroundColor: 'white',
            padding: 10,
            borderWidth:1,
            borderRadius:10,
            marginLeft:-8
          }}
        >
          <Text style={{
            color: "black",
            fontSize: 18
          }}>
            {countryCode}
          </Text>
        </TouchableOpacity>

      
        <CountryPicker
          show={show}
         
          
          pickerButtonOnPress={(item) => {

            setCountryCode(item.dial_code);
            if(countryCode){
              setShow(false);
            }
            // setShow(false);
          }}
        />
       </View>

      </View> 


      <TextInput 
        placeholder="Mo.No"
        keyboardType="phone-pad"
        value={mobileNumber}
        style={{ borderWidth: 1,
                 borderRadius: 10,
                 margin: 15,
                 marginLeft:80,
                 marginTop:-60,
                
                 width:165}}
        onChangeText={setMobileNumber}
      />

      <Image source={require('./assets/checkCircle.png')}
          style={styles.checkCircle}
        />




      <Text style={styles.text}>Enter your password</Text>
      <View>
        <TextInput style={styles.input}
          placeholder="***********"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Image source={require('./assets/eyeicon.png')} 
         style={styles.icon}
        />
      </View>

      

      



             {/* <FloatingLabelInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        containerStyles={styles.inputContainer}
        customLabelStyles={{
          colorFocused: '#6200ee',
          colorBlurred: '#aaa',
        }}
        inputStyles={styles.inp}
        />   */}

      

      <Text style={styles.ink}>forgot password?</Text>

      
        <TouchableOpacity
        title="Login"
        style={styles.button}
        onPress={saveMobileNumber}
        >
       <Text style={styles.textButton}>Login</Text></TouchableOpacity>
      

      <Text style={styles.footer}> Don’t have an account? Sign Up</Text>
      <Text style={styles.footer}>or</Text>
      
    </View>
   
    
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "white",
  },
  image: {
    height: 90,
    width: 260

  },
  header: {
    textAlign: "center",
    fontSize: 30,
    padding: 20,
    fontWeight: "bold"

  },
  main:{
    display:flex,
    flexDirection:"row"
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,

  },
  text: {
    textAlign:"left",
    paddingleft: 20,
    fontSize: 20,
    
  },
  textButton: {
    textAlign: "left",
    paddingleft: 20,
    fontSize: 20,
    color:'red',
    textAlign:'center'
  },

  ink: {
    textAlign: "right",
    padding: 10
  },
  button: {
    margin: 30,
    padding: 20,
    
    
    backgroundColor:"yellow",

  },
  footer: {
    textAlign: "center",
    padding: 20,
    fontSize: 18,
  },
  country:{
    flex:1,
    justifyContent:"center",
    margin:20
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  inp: {
    fontSize: 16,
    color: '#000',
  },
  icon: {
    height:30,
    width:30,
    position:"relative",
    bottom:50,
    left:210,
   

  },
  checkCircle: {
    
    height:30,
    width:30,
    position:"relative",
    bottom:50,
    left:210,
   

  }

  
})
