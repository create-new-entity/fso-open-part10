
import { View, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 50,
    width: Dimensions.get('window').width,
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
    color: theme.colors.white,
    display: 'flex',
    flexDirection: 'flex-start',
    gap: 5
  },
  scrollView: {
    maxHeight: 'fit-content',
    width: Dimensions.get('window').width
  }
});

const AppBar = () => {
  
  return (
    <View style={styles.container}>
        <ScrollView horizontal style={styles.scrollView}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 8}}>
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
        </ScrollView>
    </View>
   
  );
};

export default AppBar;