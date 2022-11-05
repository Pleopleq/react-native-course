import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./GoalItem";

export default function GoalList({ listOfGoals }) {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={listOfGoals}
                renderItem={(item) => {
                    return <GoalItem item={item.item}></GoalItem>;
                }}
                keyExtractor={(item, index) => {
                    return item.id;
                }}></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 5,
    },
});
