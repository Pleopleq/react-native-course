import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                maxLength={2}
                keyboardType='number-pad'
            />
            <PrimaryButton btnLabel={"Reset"}></PrimaryButton>
            <PrimaryButton btnLabel={"Confirm"}></PrimaryButton>
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
});
