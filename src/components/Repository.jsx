import { useParams } from "react-router-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import { useQuery } from "@apollo/client/react";
import { REPOSITORY_DETAILS, REPOSITORY_REVIEWS } from "../graphql/queries";
import { Dimensions, FlatList, View } from "react-native";
import Text from "./Text";
import { formatDate } from "../utils";
import { ItemSeparator } from "./RepositoryListContainer";
import theme from "../theme";


const isSuccessFullyLoaded = (queryResult) => {
    const { loading, error, data } = queryResult;
    return !loading && !error && data
};

const DIMENSION = 50;

const styles = {
    reviewItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 8,
        width: Dimensions.get('window').width,
        padding: 8
    },
    ratingContainer: {
        width: DIMENSION,
        height: DIMENSION,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: DIMENSION / 2,
        borderColor: theme.colors.primary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        flexShrink: 1
    }
};

export const ReviewItem = (props) => {
    const { review, reviewActions = null } = props;
    const { createdAt, rating, text, user } = review
    return (
        <View>
            <View style={styles.reviewItemContainer}>
                <View style={styles.ratingContainer}>
                    <Text color={'primary'}>{rating}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text fontWeight={'bold'}>{user.username}</Text>
                    <Text color={'textSecondary'}>{formatDate(createdAt)}</Text>
                    <Text >{text}</Text>
                </View>
            </View>
            {reviewActions}
        </View>
    );
};

const RepositoryReviews = (props) => {
    const { repository, repositoryUrl } = props
    const resultRepositoryReviews = useQuery(REPOSITORY_REVIEWS, {
        variables: { id: repository.id }
    });
    const { data } = resultRepositoryReviews;

    const successFullyLoaded = isSuccessFullyLoaded(resultRepositoryReviews);

    if(!successFullyLoaded) {
        return null
    }

    const reviews = data.repository.reviews.edges.map(e => e.node);

    const listHeaderComponent = () => {
        return (
            <RepositoryItem
                {...repository}
                showUrlButton={true}
                repositoryUrl={repositoryUrl}
            />
        );
    }

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={listHeaderComponent}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
}

const Repository = (props) => {
    const { repository } = props;

    const resultRepositoryDetails = useQuery(REPOSITORY_DETAILS, {
        variables: { id: repository.id }
    });

    const { data } = resultRepositoryDetails;

    const successFullyLoaded = isSuccessFullyLoaded(resultRepositoryDetails);

    if(successFullyLoaded) {
        const repositoryUrl = data.repository.url;
        return (
            <RepositoryReviews
                repository={repository}
                repositoryUrl={repositoryUrl}
            />
        );
    }
    else {
        console.log('Something is rotten in the state of Denmark.');
        return null;
    }
};

const RepositoryWrapper = () => {
    const { id } = useParams();
    const { repositories } = useRepositories();

    if(!repositories) {
        return null
    }
    const repository = repositories.edges.map(r => r.node).find(repo => repo.id === id);
    
    if(!repository) {
        return null
    }

    return (
        <Repository repository={repository}/>
    );
};

export default RepositoryWrapper;