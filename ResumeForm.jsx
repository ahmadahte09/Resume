
import React from "react";
import { Text, View, StyleSheet, TextInput, Button, ScrollView, Alert } from "react-native";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateResume } from "./resumeslice";
import { RadioButton } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";







// const dispatch=useDispatch()

export default function ResumeForm({ navigation }) {
    const dispatch = useDispatch()
    const [userDetails, setUserDetails] = useState({
        fullName: "",
        email: "",
        phoneNo: "",
        profSummary: "",
        skill: "",
        experience: "",
        education: "",
        fill: "male",
        checked: false,


    });
    const handleSubmit = () => {
        dispatch(updateResume(userDetails));
        navigation.navigate("ShowCV");
        // const filteredText = text.replace(/[^a-zA-Z]/g, '');
        // setfullname(filteredText);
    };




    return (
        <ScrollView>

            <View style={styles.cont}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Resume Input</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16,marginBottom:30 }}>
                    <CheckBox style={{ padding: 30 }}
                        value={userDetails.checked}
                        onValueChange={(e) => setUserDetails((prevuserDetails) => ({
                            ...prevuserDetails,
                            checked: e,
                        }))}

                    />
                    <Text>Form data filled</Text>
                </View>

                <View style={styles.details}>
                    <Text style={styles.titleText}>Full Name:</Text>
                    <TextInput
                        style={styles.textinput}
                        variant="outlined"
                        label="label"
                        placeholder="Enter your full name"
                        value={userDetails.fullName}
                        required
                        onChangeText={(e) => {
                            const filteredText = e.replace(/[^a-zA-Z]/g, '');
                            setUserDetails((prevUserDetails) => ({
                                ...prevUserDetails,
                                fullName: filteredText,
                            }));
                        }}

                    />
                    <Text style={styles.titleText}>Email:</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your email"
                        value={userDetails.email}
                        required
                        onChangeText={(e) => {
                            setUserDetails((prevuserDetails) => ({
                                ...prevuserDetails,
                                email: e,
                            }));
                        }}
                    />

                    <Text style={styles.titleText}>Contact Details:</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your phone number"
                        value={userDetails.phoneNo}
                        required
                        onChangeText={(e) => {
                            setUserDetails((prevuserDetails) => ({
                                ...prevuserDetails,
                                phoneNo: e
                            }));
                        }}
                    />

                </View>

                <View style={styles.details}>
                    <Text style={styles.titleText}>Professional Summary:</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your professional summary"
                        value={userDetails.profSummary}
                        required
                        onChangeText={(e) => {
                            setUserDetails((prevuserDetails) => ({
                                ...prevuserDetails,
                                profSummary: e
                            }));
                        }}
                    />

                    <Text style={styles.titleText}>Skill:</Text>
                    <TextInput
                        style={styles.skill}
                        placeholder="Enter your skill"
                        value={userDetails.skill}
                        required
                        maxLength={10}
                        onChangeText={(e) => {
                            setUserDetails((prevuserDetails) => ({
                                ...prevuserDetails,
                                skill: e
                            }));
                        }}
                    />


                </View>

                <View style={styles.details}>

                    <Text style={styles.titleText}>Experience:</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your experience"
                        value={userDetails.experience}
                        required
                        onChangeText={(e) => {
                            setUserDetails((prevuserDetails) => ({
                                ...prevuserDetails,
                                ...{ experience: e },
                            }));
                        }}
                    />

                    <Text style={styles.titleText}>Education:</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your education"
                        value={userDetails.education}

                        onChangeText={(e) => {
                            setUserDetails((prevuserDetails) => ({
                                ...prevuserDetails,
                                ...{ education: e },
                            }));
                        }}
                        required
                    />
                    <View style={{ padding: 20 }} >
                        <Text>Choose a gender</Text>
                        <RadioButton.Group
                            onValueChange={(e) => setUserDetails((prevuserDetails) => ({
                                ...prevuserDetails,
                                fill: e,
                            }))}
                            value={userDetails.fill}
                        >
                            <View style={styles.gend}>
                                <RadioButton value="male" />
                                <Text>Male</Text>
                            </View>
                            <View style={styles.gend}>
                                <RadioButton value="female" />
                                <Text>Female</Text>
                            </View>
                        </RadioButton.Group>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
                        <Checkbox style={{ padding: 30 }}
                            value={userDetails.checked}
                            onValueChange={(e) => setUserDetails((prevuserDetails) => ({
                                ...prevuserDetails,
                                checked: e,
                            }))}

                        />
                        <Text>Form data filled</Text>
                    </View>


                </View>

                <Button
                    title="Create Resume"
                    style={styles.button}
                    // onPress={() =>handleSubmit(userDetails.fullName)}
                    onPress={handleSubmit}
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
        color: "black"
    },
    details: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
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
        placeholderTextColor: "green",
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,

    },
    button: {
        alignSelf: "stretch",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#59cbbd",
        marginTop: 5,
        marginBottom: 20,
    },
    skill: {
        height: 80,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        placeholderTextColor: "blue"

    },
    gend: {
        flexDirection: 'row',
        alignItems: 'center'

    }

}); 
