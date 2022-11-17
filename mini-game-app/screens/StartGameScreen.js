import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen({ onPickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    function numberInputHandler(value) {
        setEnteredNumber(value);
    }

    function resetInputHandler() {
        setEnteredNumber("");
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            return Alert.alert(
                "Not valid number",
                "Please enter a number between 1 to 99",
                [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
            );
        }

        onPickedNumber(enteredNumber)
    }

    return (
        <View style={styles.inputContainer}>
            <View style={styles.controllerContainer}>
                <TextInput
                    style={styles.textInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
            </View>

            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: "#4e0329",
        elevation: 14,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            heigh: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },

    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },

    controllerContainer: {
        alignItems: "center",
    },

    btnContainer: {
        flexDirection: "row",
    },

    button: {
        flex: 1,
    },
});
