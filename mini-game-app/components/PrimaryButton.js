import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ btnLabel }) {
    function handleButtonPress() { }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.iosPressed, styles.buttonInnerContainer]
                        : styles.buttonInnerContainer
                }
                onPress={handleButtonPress}
                android_ripple={{ color: "#640233" }}>
                <Text style={styles.buttonText}>{btnLabel}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },

    buttonInnerContainer: {
        backgroundColor: "#72063c",
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },

    buttonText: {
        color: "white",
        textAlign: "center",
    },

    iosPressed: {
        opacity: 0.75,
    },
});
