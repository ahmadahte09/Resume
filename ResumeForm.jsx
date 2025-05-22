//ResumeForm.js

import  React from "react";
import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView} from "react-native";
import { useState } from "react";

export default function ResumeForm() {
    const [userDetails, setUserDetails] = useState({
        fullName: "",
        email: "",
        phoneNo: "",
        profSummary: "",
        skill: "",
        experience: "",
        education: "",
        
    });

    return (
        <ScrollView>
            <View style={styles.cont}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Resume Input</Text>
                </View>

                <View style={styles.details}>
                    <Text style={styles.titleText}>Personal Details</Text>
                    <TextInput
                        style={styles.textinput}
                        variant="outlined"
                        label="label"
                        placeholder="Enter your full name"
                        value={userDetails.fullName}
                        onChangeText={(e) => {
                            setUserDetails((userDetails) => ({
                                ...userDetails,
                                ...{ fullName: e },
                            }));
                        }}
                    />
                    <Text style={styles.titleText}>Email</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your email"
                        value={userDetails.email}
                        onChangeText={(e) => {
                            setUserDetails((userDetails) => ({
                                ...userDetails,
                                ...{ email: e },
                            }));
                        }}
                    />

                    <Text style={styles.titleText}>Contact Details</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your phone number"
                        value={userDetails.phoneNo}
                        onChangeText={(e) => {
                            setUserDetails((userDetails) => ({
                                ...userDetails,
                                ...{ phoneNo: e },
                            }));
                        }}
                    />

                </View>

                <View style={styles.details}>
                    <Text style={styles.titleText}>Professional Summary</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your professional summary"
                        value={userDetails.profSummary}
                        onChangeText={(e) => {
                            setUserDetails((userDetails) => ({
                                ...userDetails,
                                ...{ profSummary: e },
                            }));
                        }}
                    />

                    <Text style={styles.titleText}>Skill</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your skill"
                        value={userDetails.skill}
                        onChangeText={(e) => {
                            setUserDetails((userDetails) => ({
                                ...userDetails,
                                ...{ skill: e },
                            }));
                        }}
                    />
                   
                    
                </View>

                <View style={styles.details}>
            
                    <Text style={styles.titleText}>Experience</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter ypur experience"
                        value={userDetails.experience}
                        onChangeText={(e) => {
                            setUserDetails((userDetails) => ({
                                ...userDetails,
                                ...{ experience: e },
                            }));
                        }}
                    />

                    <Text style={styles.titleText}>Education</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your education"
                        value={userDetails.education}
                        onChangeText={(e) => {
                            setUserDetails((userDetails) => ({
                                ...userDetails,
                                ...{ education: e },
                            }));
                        }}
                    />
                    
                </View>

                <Button
                    title="Create Resume"
                    style={styles.button}
                    onPress={() => navigation.navigate("ShowCV", userDetails)}
                ></Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: "white",
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 30,
    },
    header: {
        marginBottom: 20,
        color:"black"
    },
    details: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        color: "black",
        textAlign: "center",
        fontWeight:"bold",
        borderBottomColor: "#199187",
        paddingBottom: 10,
        borderBottomWidth: 1,
    },
    titleText: {
        fontWeight: "bold",
        color: "blue",
        fontSize: 20,
        marginBottom: 10,
    },
    textinput: {
        height: 40,
        marginBottom: 20,
       borderBottomWidth: 1,
    },
    button: {
        alignSelf: "stretch",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#59cbbd",
        marginTop: 5,
        marginBottom: 20,
    },
});