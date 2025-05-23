import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { useSelector } from "react-redux";

export default function ShowCV() {
    const resume = useSelector((state) => state.resume);
    const { fullName, email, phoneNo, profSummary, skill, experience, education } = resume;
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
                    <Text style={styles.key}>Email: </Text>
                    
                </Text>

                
                <Text style={styles.text}>
                    <Text style={styles.key}>Phone Number: </Text>
                    
                </Text>
 
            </View>

            <View style={styles.details}>

                <Text style={styles.text}>
                    <Text style={styles.key}>Professional Summary: </Text>
                    
                </Text>

                <Text style={styles.text}>
                    <Text style={styles.key}>Skill: </Text>
                    
                </Text>
                

            </View>

            <View style={styles.details}>

                
                  <Text style={styles.text}>
                    <Text style={styles.key}>Experience: </Text>
                 
                  </Text>
                

                  <Text style={styles.text}>
                    <Text style={styles.key}>Education </Text>
                   
                  </Text>
                
            </View>
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
        color: "#fff",
        borderBottomColor: "#199187",
        paddingBottom: 10,
        borderBottomWidth: 1,
    },
    titleText: {
        fontWeight: "bold",
        color: "blue",
        fontSize: 15,
        marginBottom: 10,
    },
    key: {
        fontWeight: "bold" ,
        textColor: "black",
    },
})