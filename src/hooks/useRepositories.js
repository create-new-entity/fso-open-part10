

import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client/react';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' });

  if(loading) {
    return { repositories: null }
  }

  return { repositories: data.repositories };
};

export default useRepositories;