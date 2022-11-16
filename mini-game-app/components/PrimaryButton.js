import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function PrimaryButton({ btnLabel }) {
    function handleButtonPress() { }

    return (
        <Pressable onPress={handleButtonPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{btnLabel}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#72063c",
        borderRadius: 28,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4,
        elevation: 2
    },

    buttonText: {
        color: "white",
        textAlign: "center"
    }
})