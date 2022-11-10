import { StyleSheet, View, FlatList, Text } from "react-native";
import GoalItem from "./GoalItem";
import EmptyState from "./EmptyState";

export default function GoalList({ listOfGoals, onDeleteItem }) {
    return (
        <View style={styles.listContainer}>
            {listOfGoals.length !== 0 ? (
                <FlatList
                    data={listOfGoals}
                    renderItem={(item) => {
                        return (
                            <GoalItem item={item.item} onDeleteItem={onDeleteItem}></GoalItem>
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}></FlatList>
            ) : (
                <EmptyState title={"You dont have goals :("}></EmptyState>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 5,
    },
});
