import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.iosPressed, styles.buttonInnerContainer]
                        : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}>

                <Text style={styles.buttonText}>{children}</Text>

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
        backgroundColor: Colors.primary500,
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
