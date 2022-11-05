import { StyleSheet, View, TextInput, Button } from "react-native"

export default function GoalInput({ goal, handleInput, addGoalHandler }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Your course goal!'
                value={goal}
                onChangeText={handleInput}
            />
            <Button color={"#A47551"} title='💩' onPress={addGoalHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
})