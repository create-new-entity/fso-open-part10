import { useApolloClient } from "@apollo/client/react";
import useAuthStorage from "../hooks/useAuthStorage";
import { Pressable, Text } from "react-native";
import { useNavigate } from "react-router-native";
import theme from "../theme";


const SignOutTab = () => {
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        navigate('/');
    };

    return (
        <Pressable onPress={handleSignOut}>
            <Text style={{ color: theme.colors.white }}>Sign Out</Text>
        </Pressable>
    );
};

export default SignOutTab;