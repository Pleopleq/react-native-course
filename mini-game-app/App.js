import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const backgroundImage = require("./assets/images/background.png");

export default function App() {
  const [userNumber, setUserNumber] = useState()

  function startGame(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickedNumber={startGame} />

  if (userNumber) {
    screen = <GameScreen></GameScreen>
  }

  return (

    <LinearGradient colors={[Colors.secondary300, Colors.primary800]} style={styles.rootScreen}>
      <ImageBackground
        source={backgroundImage}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImageStyle}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImageStyle: {
    opacity: 0.15
  }
});
