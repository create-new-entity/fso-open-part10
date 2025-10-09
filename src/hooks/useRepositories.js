

import { useRepositorySearchContext } from '../contexts/RepositorySearchFieldContext';
import { useSortRepositories } from '../contexts/SortRepositoriesContext';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client/react';

const CHUNK_SIZE = 8;

const useRepositories = () => {
  const { searchKeyword } = useRepositorySearchContext();
  const { variables: selectedVariables } = useSortRepositories();

  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      first: CHUNK_SIZE,
      orderBy: selectedVariables?.orderBy,
      orderDirection: selectedVariables?.orderDirection,
      searchKeyword
    }
  });
  
  const{ data, error, loading, fetchMore } = result

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        first: CHUNK_SIZE,
        after: data.repositories.pageInfo.endCursor,
        orderBy: selectedVariables?.orderBy,
        orderDirection: selectedVariables?.orderDirection,
        searchKeyword
      },
    });
  };

  if(loading) {
    return { repositories: null, fetchMore: () => {} }
  }

  return { repositories: data.repositories, fetchMore: handleFetchMore };
};

export default useRepositories;