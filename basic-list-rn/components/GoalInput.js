import { StyleSheet, View, TextInput, Button } from "react-native"
import { useState } from "react";

export default function GoalInput({ addGoalHandler }) {
    const [goal, setGoal] = useState("");

    function handleInput(value) {
        setGoal(value);
    }

    function handleAddGoal() {
        addGoalHandler(goal)
        setGoal("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Your course goal!'
                value={goal}
                onChangeText={handleInput}
            />
            <Button color={"#A47551"} title='💩' onPress={handleAddGoal} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
})