import { useQuery } from "@apollo/client/react";
import { SIGNED_IN_USER } from "../graphql/queries";
import { ReviewItem } from "./Repository";
import { FlatList } from "react-native";
import { ItemSeparator } from "./RepositoryListContainer";

const styles = {
    flatList: {
        padding: 10
    }
}

const UserReviews = () => {
    const { loading, error, data } = useQuery(SIGNED_IN_USER, { variables: { includeReviews: true }});

    const notReady = loading || error
    if(notReady) {
        return null;
    }

    const reviews = data.me.reviews.edges.map(e => e.node);

    return (
        <FlatList
            style={styles.flatList}
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};

export default UserReviews;