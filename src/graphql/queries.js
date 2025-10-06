
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
