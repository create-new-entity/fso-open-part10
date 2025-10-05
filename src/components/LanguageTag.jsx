import { StyleSheet } from 'react-native'
import Text from "./Text";
import theme from '../theme';

const styles = StyleSheet.create({
    languageTag: {
        padding: 3,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        maxWidth: 'fit-content',
        borderRadius: 3
    }
});


const LanguageTag = (props) => {
    const { language } = props;

    return (
        <Text style={styles.languageTag}>{language}</Text>
    );
};

export default LanguageTag;