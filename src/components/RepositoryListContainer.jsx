import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import RepositoriesSortMenu from './RepositoriesSortMenu';
import RepositorySearchBar from './SearchBar';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

export const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = (props) => {
  const { repositories, onEndReach } = props;

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <>
      <RepositorySearchBar/>
      <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <RepositoryItem {...item}/>}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => <RepositoriesSortMenu/>}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
      />
    </>
  );
};

export default RepositoryListContainer;