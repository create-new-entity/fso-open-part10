
import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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

export const SIGNED_IN_USER = gql`
    query getSignedInUser($includeReviews: Boolean = false) {
        me {
            id
            username
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        id
                        rating
                        createdAt
                        text
                        user {
                            username
                        }
                        repositoryId
                    }
                }
            }
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
