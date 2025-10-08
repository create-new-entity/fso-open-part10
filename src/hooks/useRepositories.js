

import { useSortRepositories } from '../contexts/SortRepositoriesContext';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client/react';

const useRepositories = () => {
  const { variables: selectedVariables } = useSortRepositories();
  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy: selectedVariables?.orderBy, orderDirection: selectedVariables?.orderDirection }
  });
  const{ data, error, loading } = result

  if(loading) {
    return { repositories: null }
  }

  return { repositories: data.repositories };
};

export default useRepositories;