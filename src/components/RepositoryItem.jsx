import { View, Text, Image, StyleSheet, Pressable, Linking } from 'react-native';
import theme from '../theme';
import LanguageTag from './LanguageTag';
import { toThousandsString } from '../utils';
import SubItem from './SubItem';
import { Button } from 'react-native-web';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
    rootContainer: {
        padding: 5,
        margin: 5,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10
    },
    topContainerRightItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 3,
        flexGrow: 1
    },
    avatarImage: {
        width: 50,
        height: 50,
        objectFit: 'contain'
    },
    repositoryName: {
        fontWeight: theme.fontWeights.bold
    },
    description: {
        color: theme.colors.textSecondary
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 5,
        marginTop: 2
    }
});

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
        ownerAvatarUrl,
        showUrlButton = false,
        repositoryUrl
    } = props;

    const navigate = useNavigate();

    const onPress = () => {
        const notInTheSingleRepoView = !showUrlButton
        if(notInTheSingleRepoView) {
            navigate(`/repository/${id}`);
        }
    }

    return (
        <Pressable onPress={onPress}>
            <View testID="repositoryItem" style={styles.rootContainer}>
                <View style={styles.topContainer}>
                    <Image
                        style={[styles.avatarImage]}
                        source={{
                            uri: ownerAvatarUrl,
                        }}
                    />
                    <View style={[styles.topContainerRightItem]}>
                        <Text style={[styles.repositoryName]}>{fullName}</Text>
                        <Text style={[styles.description]}>{description}</Text>
                        <LanguageTag language={language}/>
                    </View>
                </View>
                <View style={[styles.bottomContainer]}>
                    <SubItem text={'Stars'} value={toThousandsString(stargazersCount)}/>
                    <SubItem text={'Forks'} value={toThousandsString(forksCount)}/>
                    <SubItem text={'Reviews'} value={toThousandsString(reviewCount)}/>
                    <SubItem text={'Rating'} value={toThousandsString(ratingAverage)}/>
                </View>
                {
                    showUrlButton && <Button onPress={() => Linking.openURL(repositoryUrl)} title='Open in GitHub'/>
                }
            </View>
        </Pressable>
    );
};

export default RepositoryItem;