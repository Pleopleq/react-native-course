import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
    const randomNum = Math.floor(Math.random() * (max - min) + min)

    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return randomNum
    }
}

export default function GameScreen({ pickedNumber }) {
    const initialGuess = generateRandomBetween(1, 100, pickedNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    return (
        <View style={styles.screen}>
            <Title>Opponents Guess</Title>
            <Text>{currentGuess}</Text>
            <View>
                <Text>Higher or lower?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },

    gameScreenContainer: {},
});
