import { StyleSheet, View, Text, Pressable } from "react-native"


export default function GoalItem({ item, onDeleteItem }) {
    return (
        <View style={styles.listItems}>
            <Pressable
                android_ripple={{ color: 'white' }}
                onPress={onDeleteItem.bind(this, item.id)}
                style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.textColor}>{item.text}</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    listItems: {
        marginTop: 12,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },

    pressedItem: {
        opacity: 0.5,
    },

    textColor: {
        color: "white",
        padding: 8,
    },
})