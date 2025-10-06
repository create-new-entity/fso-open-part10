import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    subItemContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subItem: {
        maxWidth: 'fit-content'
    }
});

const SubItem = (props) => {
    const { text, value } = props

    return (
        <View testID={text} style={[styles.subItemContainer]}>
            <Text fontWeight={'bold'} style={[styles.subItem]}>{value}</Text>
            <Text color={'textSecondary'} style={[styles.subItem]}>{text}</Text>
        </View>
    );
};

export default SubItem;