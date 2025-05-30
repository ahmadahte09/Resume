import React from "react";
import {Text,View,StyleSheet,Button} from "react-native";
import { useSelector } from "react-redux";

export default function ShowCV() {
    const resume = useSelector((state) => state.resume);
    const { fullName, email, phoneNo, profSummary, skill, experience, education,fill } = resume;
    console.log(resume);
    
    return (
      
        <View style={styles.cont}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Your Resume</Text>
            </View>

            <View style={styles.details}>
                
                <Text style={styles.text}>
                    <Text style={styles.key}>Full Name: {resume.fullName}</Text>
                    
                
                </Text>

                
                <Text style={styles.text}>
                    <Text style={styles.key}>Email: {resume.email} </Text>
                    
                </Text>

                
                <Text style={styles.text}>
                    <Text style={styles.key}>Phone Number: {resume.phoneNo} </Text>
                    
                </Text>
 
            </View>

            <View style={styles.details}>

                <Text style={styles.text}>
                    <Text style={styles.key}>Professional Summary: {resume.profSummary} </Text>
                    
                </Text>

                <Text style={styles.text}>
                    <Text style={styles.key}>Skill: {resume.skill} </Text>
                    
                </Text>
                

            </View>

            <View style={styles.details}>

                
                  <Text style={styles.text}>
                    <Text style={styles.key}>Experience: {resume.experience} </Text>
                 
                  </Text>
                

                  <Text style={styles.text}>
                    <Text style={styles.key}>Education: {resume.education} </Text>
                   
                  </Text>

                  <Text style={styles.text}>
                    <Text style={styles.key}>Gender: {resume.fill} </Text>
                   
                  </Text>

                  
                
            </View>
            <Button title="Print"></Button>
        </View>
        
       
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        // backgroundColor: "#36485f",
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 40,
    },
    header: {
        marginBottom: 20,
        alignSelf: "stretch",
    },
    details: {
        marginBottom: 15,
    },
    headerText: {
        fontSize: 24,
        color: "blue",
        borderBottomColor: "#199187",
        paddingBottom: 10,
        borderBottomWidth: 1,
        textAlign:"center"
    },
    text: {
        fontWeight: "bold",
        color: "black",
        fontSize: 25,
        marginBottom: 20,
    },
    key: {
        fontWeight: "bold" ,
        textColor: "black",
    },
})