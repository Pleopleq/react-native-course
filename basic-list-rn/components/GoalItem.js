import { StyleSheet, View, Text, Pressable } from "react-native"


export default function GoalItem({ item, onDeleteItem }) {
    return (
        <Pressable onPress={onDeleteItem.bind(this, item.id)}>
            <View style={styles.listItems}>
                <Text style={styles.textColor}>{item.text}</Text>
            </View>
        </Pressable>
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