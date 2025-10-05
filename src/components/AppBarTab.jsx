
import { Text, Pressable } from 'react-native';


const AppBarTab = (props) => {
    const { text, textStyles } = props

    const onPressFunction = () => {
        console.log('Repositories pressed');
    }
    
    return (
        <Pressable onPress={onPressFunction}>
            <Text style={textStyles}>{text}</Text>
        </Pressable>
    );
};

export default AppBarTab;