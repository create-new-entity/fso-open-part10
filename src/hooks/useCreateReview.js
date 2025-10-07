import { useMutation } from "@apollo/client/react";
import { CREATE_REVIEW } from "../graphql/mutation";


const useCreateReview = () => {
    const [createReview, result] = useMutation(CREATE_REVIEW)

    const handleCreateReview = async ({ ownerName, repositoryName, rating, review }) => {
        const variables = {
            review: { ownerName, repositoryName, rating, text: review }
        };
        const result = await createReview({ variables })
        return result.data
    }

    return [handleCreateReview, result];
};

export default useCreateReview;