import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image,
    ToastAndroid
} from "react-native";
import { useState } from "react";
const goalImg = require("../assets/images/goal.png");

export default function GoalInput({
    addGoalHandler,
    isVisible,
    handleCloseModal,
}) {
    const [goal, setGoal] = useState("");

    function handleInput(value) {
        setGoal(value);
    }

    function handleAddGoal() {
        if (!goal) { return showToast(); }

        addGoalHandler(goal);
        setGoal("");
        handleCloseModal();
    }

    function showToast() {
        ToastAndroid.show('You need to add a goal', ToastAndroid.CENTER)
    }

    return (
        <Modal visible={isVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={goalImg} />

                <TextInput
                    placeholder='Your course goal!'
                    value={goal}
                    onChangeText={handleInput}
                    style={styles.goalInput}
                />

                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button color={"#A47551"} title='💩' onPress={handleAddGoal} />
                    </View>

                    <View style={styles.button}>
                        <Button
                            color={"red"}
                            title='Cancel'
                            onPress={handleCloseModal}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#cccccc",
        backgroundColor: "#ADD8E6"
    },

    image: {
        width: 120,
        height: 120,
        margin: 24,
    },

    goalInput: {
        marginBottom: 24,
        borderWidth: 1,
        width: "70%",
        padding: 8,
        borderColor: "#cccccc",
        borderRadius: 12,
        backgroundColor: "white"
    },

    buttonsContainer: {
        flexDirection: "row",
    },

    button: {
        width: "40%",
        marginHorizontal: 8,
    },
});
