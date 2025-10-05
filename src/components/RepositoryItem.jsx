import { View, Text } from 'react-native';

const RepositoryItem = (props) => {
    const {
        id,
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        ratingAverage,
        reviewCount,
        ownerAvatarUrl
    } = props;

    return (
        <View>
            <Text>{fullName}</Text>
            <Text>{description}</Text>
            <Text>{language}</Text>
            <Text>{stargazersCount}</Text>
            <Text>{forksCount}</Text>
            <Text>{reviewCount}</Text>
            <Text>{ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem;