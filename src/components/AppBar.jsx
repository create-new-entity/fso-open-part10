
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 50,
    backgroundColor: theme.colors.appBar,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    gap: 5,
    paddingLeft: 5,
    paddingBottom: 5
  },
  containerText: {
    color: theme.colors.white,
    display: 'flex',
    flexDirection: 'flex-start',
    gap: 5
  }
});

const AppBar = () => {
  
  return (
    <View style={styles.container}>
        <AppBarTab
            text={'Repositories'}
            textStyles={styles.containerText}
            linkTo={'/'}
        />
        <AppBarTab
            text={'Sign In'}
            textStyles={styles.containerText}
            linkTo={'/sign_in'}
        />
    </View>
  );
};

export default AppBar;