import {
  StyleSheet,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import { useState } from "react";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);

  function addGoalHandler(goal) {
    setListOfGoals((currentGoalList) => [...currentGoalList, { text: goal, id: Math.random().toString() }]);
  }

  return (
    <View style={styles.container}>
      <GoalInput addGoalHandler={addGoalHandler}></GoalInput>
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
