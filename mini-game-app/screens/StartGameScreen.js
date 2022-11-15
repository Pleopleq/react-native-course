import { TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
    return (
        <View>
            <TextInput />
            <PrimaryButton btnLabel={'Reset'}></PrimaryButton>
            <PrimaryButton btnLabel={'Confirm'}></PrimaryButton>
        </View>
    );
}