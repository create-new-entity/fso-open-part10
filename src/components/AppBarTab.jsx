
import { Text, Pressable } from 'react-native';
import { Link } from 'react-router-native';


const AppBarTab = (props) => {
    const { text, textStyles, linkTo } = props
    
    return (
        <Link to={linkTo}>
            <Text style={[textStyles]}>{text}</Text>
        </Link>
    );
};

export default AppBarTab;