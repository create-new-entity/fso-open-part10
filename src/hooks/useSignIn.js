import { useApolloClient, useMutation } from "@apollo/client/react";
import { SIGN_IN } from "../graphql/mutation";

import useAuthStorage from "./useAuthStorage";
import { useNavigate } from "react-router-native";

export const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();
  const navigate = useNavigate();



  const signIn = async ({ username, password }) => {
    const result = await mutate({
        variables: { username, password }
    })

    const { data: { authenticate : { accessToken }} } = result

    await authStorage.setAccessToken(accessToken);
    apolloClient.resetStore();
    navigate('/');

    return result;
  };

  return [signIn, result];
};