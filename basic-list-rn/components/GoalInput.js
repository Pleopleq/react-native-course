import { StyleSheet, View, TextInput, Button, Modal } from "react-native"
import { useState } from "react";

export default function GoalInput({ addGoalHandler, isVisible, handleCloseModal }) {
    const [goal, setGoal] = useState("");

    function handleInput(value) {
        setGoal(value);
    }

    function handleAddGoal() {
        addGoalHandler(goal)
        setGoal("");
        handleCloseModal();
    }


    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.inputContainer}>
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
                        <Button color={"red"} title="Cancel" onPress={handleCloseModal}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 24,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
    },

    goalInput: {
        marginBottom: 24,
        borderWidth: 1,
        width: '70%',
        padding: 8,
        borderColor: "#cccccc"
    },

    buttonsContainer: {
        flexDirection: "row",
    },

    button: {
        width: "40%",
        marginHorizontal: 8,
    }
})