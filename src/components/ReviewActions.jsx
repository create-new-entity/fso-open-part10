import { useMutation } from "@apollo/client/react";
import { View, Button, Alert } from "react-native";
import { useNavigate } from "react-router-native";
import { DELETE_REVIEW } from "../graphql/mutation";
import { SIGNED_IN_USER } from "../graphql/queries";
import theme from "../theme";

const styles = {
    rootContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 5,
        margin: 10
    },
    deleteButton: {
        backGroundColor: theme.colors.red
    }
}

const ReviewActions = (props) => {
    const { reviewId, repositoryId } = props;
    const navigate = useNavigate();
    const [deleteReview] = useMutation(DELETE_REVIEW);

    const handleViewRepository = () => {
        navigate(`/repository/${repositoryId}`);
    }

    const handleDeleteReview = () => {
        Alert.alert('Delete this review?', '', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete',
                onPress: () => {
                    deleteReview({
                        variables: { id: reviewId },
                        refetchQueries: [{ query: SIGNED_IN_USER, variables: { includeReviews: true } }]
                    })
                }
            },
        ]);
    }

    return (
        <View style={styles.rootContainer}>
            <Button title="View Repository" onPress={handleViewRepository}/>
            <Button title="Delete Review" color={theme.colors.red} onPress={handleDeleteReview}/>
        </View>
    );
};

export default ReviewActions;