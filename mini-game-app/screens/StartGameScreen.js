import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton btnLabel={'Reset'}></PrimaryButton>
            <PrimaryButton btnLabel={'Confirm'}></PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: "#72063c",
        elevation: 14,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            heigh: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})