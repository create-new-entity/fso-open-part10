
import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepositories {
    repositories {
        edges {
            node {
                description
                forksCount
                fullName
                language
                name
                ownerAvatarUrl
                ratingAverage
                reviewCount
                stargazersCount
                id
            }
        }
    }
}
`;

export const SIGNED_IN_USER = gql`{
        me {
            id
            username
        }
    }
`;

export const REPOSITORY_DETAILS = gql`
    query repository($id: ID!){
        repository(id: $id){
            id
            fullName
            url
        }
    }
`;

export const REPOSITORY_REVIEWS = gql`
    query repositoryReviews($id: ID!) {
        repository(id: $id) {
            id
            fullName
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`;
