import { View, Image, Text, StyleSheet } from "react-native"
const sadPoop = require("../assets/images/sadPoop.png")

export default function EmptyState({ title }) {
    return (
        <View style={styles.emptyStateContainer}>
            <Image source={sadPoop}></Image>
            <Text style={styles.emptyStateTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    emptyStateContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    emptyStateTitle: {
        fontSize: 16,
        fontWeight: "700"
    }
})