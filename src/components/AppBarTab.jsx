
import { Text, Pressable } from 'react-native';
import { Link } from 'react-router-native';


const AppBarTab = (props) => {
    const { text, textStyles, linkTo } = props

    const onPressFunction = () => {
        console.log('Repositories pressed');
    }
    
    return (
        <Link to={linkTo}>
            <Text style={[textStyles]}>{text}</Text>
        </Link>
    );
};

export default AppBarTab;