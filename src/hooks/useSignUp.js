import { useMutation } from "@apollo/client/react";
import { SIGN_UP } from "../graphql/mutation";

const useSignUp = () => {
    const [signUp] = useMutation(SIGN_UP);

    const handleSignUp = async ({ username, password }) => {
        const variables = {
            user: { username, password }
        }
        const result = await signUp({ variables })
        return result.data.createUser
    }

    return [handleSignUp];
};

export default useSignUp;