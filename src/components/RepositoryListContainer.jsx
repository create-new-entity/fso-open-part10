import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

export const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = (props) => {
  const { repositories } = props;

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem {...item}/>}
        keyExtractor={item => item.id}
    />
  );
};

export default RepositoryListContainer;