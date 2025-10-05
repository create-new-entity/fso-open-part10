import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://172.20.10.6:4000/graphql'
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
