
import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepositories(
        $orderBy: AllRepositoriesOrderBy,
        $orderDirection: OrderDirection,
        $searchKeyword: String,
        $first: Int,
        $after: String
    ) {
        repositories(
            orderBy: $orderBy, 
            orderDirection: $orderDirection, 
            searchKeyword: $searchKeyword,
            first: $first,
            after: $after
        ) {
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
                cursor
            }
            pageInfo {
                endCursor
                startCursor
                hasNextPage
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
    query repository($id: ID!, $first: Int, $after: String){
        repository(id: $id){
            id
            fullName
            url
            reviews(first: $first, after: $after) {
                totalCount
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        repositoryId
                        user {
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
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
