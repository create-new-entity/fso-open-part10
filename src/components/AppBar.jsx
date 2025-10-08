
import { View, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useQuery } from '@apollo/client/react';
import { SIGNED_IN_USER } from '../graphql/queries';
import SignOutTab from './SignOut';

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

  const { loading, error, data } = useQuery(SIGNED_IN_USER);

  const notSignedIn = !loading && data && !data.me
  const signedIn = !loading && data && data.me
  
  return (
    <View style={styles.container}>
        <ScrollView horizontal style={styles.scrollView}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 8}}>
                <AppBarTab
                  text={'Repositories'}
                  textStyles={styles.containerText}
                  linkTo={'/'}
                />
                {
                  notSignedIn &&
                  <>
                    <AppBarTab
                      text={'Sign In'}
                      textStyles={styles.containerText}
                      linkTo={'/sign_in'}
                    />
                    <AppBarTab
                      text={'Sign Up'}
                      textStyles={styles.containerText}
                      linkTo={'/sign_up'}
                    />
                  </>
                }
                {
                  signedIn &&
                  <>
                    <AppBarTab
                      text={'Create a review'}
                      textStyles={styles.containerText}
                      linkTo={'/create_review'}
                    />
                    <AppBarTab
                      text={'My reviews'}
                      textStyles={styles.containerText}
                      linkTo={'/my_reviews'}
                    />
                    <SignOutTab/>
                  </>
                }
            </View>
        </ScrollView>
    </View>
   
  );
};

export default AppBar;