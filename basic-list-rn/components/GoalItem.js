import { StyleSheet, View, Text } from "react-native"


export default function GoalItem({ item }) {
    return (
        <View style={styles.listItems}>
            <Text style={styles.textColor}>{item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItems: {
        margin: 8,
        padding: 3,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },

    textColor: {
        color: "white",
    },
})