import { useMutation } from "@apollo/client/react";
import { SIGN_IN } from "../graphql/mutation";

export const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    return await mutate({
        variables: { username, password }
    })
  };

  return [signIn, result];
};