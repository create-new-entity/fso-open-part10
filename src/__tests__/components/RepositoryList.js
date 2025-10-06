


import { render, screen, within } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryListContainer';
import { toThousandsString } from '../../utils';


const repositories = {
    totalCount: 8,
    pageInfo: {
        hasNextPage: true,
        endCursor:
        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
        startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    edges: [
        {
        node: {
            id: 'jaredpalmer.formik',
            fullName: 'jaredpalmer/formik',
            description: 'Build forms in React, without the tears',
            language: 'TypeScript',
            forksCount: 1619,
            stargazersCount: 21856,
            ratingAverage: 88,
            reviewCount: 3,
            ownerAvatarUrl:
            'https://avatars2.githubusercontent.com/u/4060187?v=4',
        },
        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        {
        node: {
            id: 'async-library.react-async',
            fullName: 'async-library/react-async',
            description: 'Flexible promise-based React data loader',
            language: 'JavaScript',
            forksCount: 69,
            stargazersCount: 1760,
            ratingAverage: 72,
            reviewCount: 3,
            ownerAvatarUrl:
            'https://avatars1.githubusercontent.com/u/54310907?v=4',
        },
        cursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
        },
    ]
};

describe('RepositoryItem', () => {
  it('RepositoryListContainer', () => {
    render(<RepositoryListContainer repositories={repositories} />);

    const repos = repositories.edges.map(e => e.node);
    const repoNames = repos.map(repo => repo.fullName);
    const repoDescriptions = repos.map(repo => repo.description);
    const repoLanguages = repos.map(repo => repo.language);

    const repoForksCountsStrings = repos.map(repo => repo.forksCount).map(toThousandsString);
    const repoStarGazersCountsStrings = repos.map(repo => repo.stargazersCount).map(toThousandsString);
    const repoRatingAveragesStrings = repos.map(repo => repo.ratingAverage).map(toThousandsString);
    const repoRatingReviewCountsStrings = repos.map(repo => repo.reviewCount).map(toThousandsString);
    
    // screen.debug();

    const allRepositoryItems = screen.getAllByTestId('repositoryItem')
    
    expect(allRepositoryItems.length).toBe(2)

    expect(screen.getByText(repoNames[0])).toBeDefined();
    expect(screen.getByText(repoNames[1])).toBeDefined();

    expect(screen.getByText(repoDescriptions[0])).toBeDefined();
    expect(screen.getByText(repoDescriptions[1])).toBeDefined();

    expect(screen.getByText(repoLanguages[0])).toBeDefined();
    expect(screen.getByText(repoLanguages[1])).toBeDefined();


    const forksSubItems = screen.getAllByTestId('Forks');
    expect(within(forksSubItems[0]).getByText(repoForksCountsStrings[0])).toBeDefined();
    expect(within(forksSubItems[1]).getByText(repoForksCountsStrings[1])).toBeDefined();


    const starsSubItems = screen.getAllByTestId('Stars');
    expect(within(starsSubItems[0]).getByText(repoStarGazersCountsStrings[0])).toBeDefined();
    expect(within(starsSubItems[1]).getByText(repoStarGazersCountsStrings[1])).toBeDefined();

    const reviewsSubItems = screen.getAllByTestId('Reviews');
    expect(within(reviewsSubItems[0]).getByText(repoRatingReviewCountsStrings[0])).toBeDefined();
    expect(within(reviewsSubItems[1]).getByText(repoRatingReviewCountsStrings[1])).toBeDefined();

    const ratingsSubItems = screen.getAllByTestId('Rating');
    expect(within(ratingsSubItems[0]).getByText(repoRatingAveragesStrings[0])).toBeDefined();
    expect(within(ratingsSubItems[1]).getByText(repoRatingAveragesStrings[1])).toBeDefined();

  });
});