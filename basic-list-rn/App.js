import {
  StyleSheet,
  View,
  Button
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import { useState } from "react";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false)

  function addGoalHandler(goal) {
    setListOfGoals((currentGoalList) => [...currentGoalList, { text: goal, id: Math.random().toString() }]);
  }

  function deleteGoalHandler(id) {
    setListOfGoals((currentGoalList) => {
      return currentGoalList.filter(element => element.id !== id)
    })
  }

  function toggleModalHandler() {
    setIsModalVisible(true)
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }


  return (
    <View style={styles.container}>
      <Button title="Add New Goal!" color={"#A47551"} onPress={toggleModalHandler}></Button>
      <GoalInput addGoalHandler={addGoalHandler} isVisible={isModalVisible} handleCloseModal={handleCloseModal}></GoalInput>
      <GoalList listOfGoals={listOfGoals} onDeleteItem={deleteGoalHandler}></GoalList>
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
