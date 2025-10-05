

import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 50,
    backgroundColor: theme.colors.appBar,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: 5,
    paddingLeft: 5,
    paddingBottom: 5
  },
  containerText: {
    color: theme.colors.white
  }
});

const AppBar = () => {
  
  return (
    <View style={styles.container}>
        <AppBarTab
            text={'Repositories'}
            textStyles={styles.containerText}
        />
    </View>
  );
};

export default AppBar;