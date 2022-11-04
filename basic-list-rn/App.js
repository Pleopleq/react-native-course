import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
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
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your course goal!'
          value={goal}
          onChangeText={handleInput}
        />
        <Button color={"#A47551"} title='💩' onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={listOfGoals}
          renderItem={(item) => {
            return (
              <View style={styles.listItems}>
                <Text style={styles.textColor}>{item.item.text}</Text>
              </View>
            );
          }}

          keyExtractor={(item, index) => {
            return item.id
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  listContainer: {
    flex: 5,
  },

  listItems: {
    margin: 8,
    padding: 3,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  textColor: {
    color: "white",
  },
});
