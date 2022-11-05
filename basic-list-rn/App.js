import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState("");
  const [listOfGoals, setListOfGoals] = useState([]);

  function handleInput(value) {
    setGoal(value);
  }

  function addGoalHandler() {
    setListOfGoals((currentGoalList) => [...currentGoalList, { text: goal, id: Math.random().toString() }]);
    setGoal("");
  }

  return (
    <View style={styles.container}>
      <GoalInput goal={goal} handleInput={handleInput} addGoalHandler={addGoalHandler}></GoalInput>
      <GoalList listOfGoals={listOfGoals}></GoalList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
