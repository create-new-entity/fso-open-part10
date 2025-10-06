import { useMutation } from "@apollo/client/react";
import { SIGN_IN } from "../graphql/mutation";

import useAuthStorage from "./useAuthStorage";

export const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    return await mutate({
        variables: { username, password }
    })
  };

  return [signIn, result];
};