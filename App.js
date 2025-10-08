import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client/react';
import createApolloClient from './src/utils/apolloClient';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import AuthStorage from './src/utils/authStorage';
import { PaperProvider } from 'react-native-paper';
import SortRepositoresProvider from './src/contexts/SortRepositoriesContext';
import { RepositorySearchProvider } from './src/contexts/RepositorySearchFieldContext';


const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);


const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <RepositorySearchProvider>
              <SortRepositoresProvider>
                <PaperProvider>
                  <Main />
                </PaperProvider>
              </SortRepositoresProvider>
            </RepositorySearchProvider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;