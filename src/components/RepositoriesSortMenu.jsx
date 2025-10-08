import { Menu } from "react-native-paper";
import { getSortRepositoryOptions, useSortRepositories } from "../contexts/SortRepositoriesContext";
import { View, Button } from "react-native-web";
import { useState } from "react";

const styles = {
    rootContainer: {
        padding: 5
    }
}

const RepositoriesSortMenu = () => {
    const {
        variables,
        setSortCriteria,
        setDirection
    } = useSortRepositories();
    const menuOptions = getSortRepositoryOptions();

    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const getSelectionHandler = (option) => {
        return () => {
            const { newSortCriteria, newDirection } = option;
            setSortCriteria(newSortCriteria);
            if(newDirection) {
                setDirection(newDirection);
            }
            closeMenu();
        }
    }

    if(!variables) {
        return null;
    }


    return (
        <View style={styles.rootContainer}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button title={variables.text} onPress={openMenu}/>}
            >
                {
                    menuOptions.map((menuOption) => {
                        return (
                            <Menu.Item
                                key={menuOption.text}
                                onPress={getSelectionHandler(menuOption)}
                                title={menuOption.text}
                            />
                        );
                    })
                }
            </Menu>
        </View>
    );
};

export default RepositoriesSortMenu;