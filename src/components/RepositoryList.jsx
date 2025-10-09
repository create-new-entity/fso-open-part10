import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories, fetchMore } = useRepositories();

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={fetchMore}
    />
  );
}



export default RepositoryList;