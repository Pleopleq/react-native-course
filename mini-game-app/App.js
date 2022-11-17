import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
    <LinearGradient colors={["#ddb52f", "#4e0329"]} style={styles.rootScreen}>
      <ImageBackground
        source={backgroundImage}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImageStyle}>
        {screen}
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
