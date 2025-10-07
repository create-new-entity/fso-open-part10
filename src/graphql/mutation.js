import { gql } from "@apollo/client";


export const SIGN_IN = gql`
    mutation authenticate($username: String!, $password: String!) {
        authenticate(credentials: { username: $username, password: $password }) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation Mutation($review: CreateReviewInput) {
        createReview(review: $review) {
            repositoryId
        }
    }
`;

export const SIGN_UP = gql`
    mutation Mutation($user: CreateUserInput) {
        createUser(user: $user) {
            username
            id
        }
    }
`;

