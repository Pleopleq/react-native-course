import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

const backgroundImage = require("./assets/images/background.png");

export default function App() {
  return (
    <LinearGradient colors={["#ddb52f", "#4e0329"]} style={styles.rootScreen}>
      <ImageBackground
        source={backgroundImage}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImageStyle}>
        <StartGameScreen></StartGameScreen>
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
