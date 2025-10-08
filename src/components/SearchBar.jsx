import { Searchbar } from "react-native-paper";
import { useRepositorySearchContext } from '../contexts/RepositorySearchFieldContext';
import theme from "../theme";

const styles = {
    searchBar: {
        margin: 10,
        backgroundColor: theme.colors.primary
    }
}

const RepositorySearchBar = () => {
    const { searchQuery, setSearchQuery } = useRepositorySearchContext();
    return (
        <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
        />
    );
};

export default RepositorySearchBar;