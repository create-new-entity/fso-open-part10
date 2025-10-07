import { useFormik } from "formik";
import { View, TextInput, Button } from "react-native";
import * as yup from 'yup';
import theme from "../theme";
import Text from "./Text";
import useSignUp from "../hooks/useSignUp";
import { useSignIn } from "../hooks/useSignIn";

const styles = {
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5
    },
    subSectionContainer: {
        alignSelf: 'stretch',
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    textInput: {
        alignSelf: 'stretch',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5
    },
    error: {
        color: theme.colors.red,
        borderColor: theme.colors.red
    },
    buttonContainer: {
        alignSelf: 'stretch'
    }
}

const initialValues = {
    username: '',
    password: '',
    confirmPassword: ''
};

const validationSchema = yup.object({
    username: yup.string()
        .min(5, 'Must be at least 5 characters long.')
        .max(30, 'Max 30 characters are allowed.')
        .required('username is required.'),
    password: yup.string()
        .min(5, 'Must be at least 5 characters long.')
        .max(50, 'Max 50 characters are allowed.')
        .required('password is required.'),
    confirmPassword: yup.string()
        .min(5, 'Must be at least 5 characters long.')
        .max(50, 'Max 50 characters are allowed.')
        .required('Please re enter password.')
        .oneOf([yup.ref('password'), null], 'Passwords do not match.')
});


const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        await signUp(values)
        await signIn(values)
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    const usernameHasError = formik.touched.username && formik.errors.username
    const passwordHasError = formik.touched.password && formik.errors.password
    const confirmPasswordHassError = formik.touched.confirmPassword && formik.errors.confirmPassword

    return (
        <View style={styles.rootContainer}>
            <View style={styles.subSectionContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'username'}
                    value={formik.values.username}
                    onChangeText={formik.handleChange('username')}
                />
                {
                    usernameHasError &&(
                        <Text style={{ color: theme.colors.red }}>{formik.errors.username}</Text>
                    )
                }
            </View>
            <View style={styles.subSectionContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'password'}
                    secureTextEntry
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                />
                {
                    passwordHasError &&(
                        <Text style={{ color: theme.colors.red }}>{formik.errors.password}</Text>
                    )
                }
            </View>
            <View style={styles.subSectionContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'confirmPassword'}
                    secureTextEntry
                    value={formik.values.confirmPassword}
                    onChangeText={formik.handleChange('confirmPassword')}
                />
                {
                    confirmPasswordHassError &&(
                        <Text style={{ color: theme.colors.red }}>{formik.errors.confirmPassword}</Text>
                    )
                }
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Sign Up" onPress={formik.handleSubmit}/>
            </View>
        </View>
    );
};

export default SignUp;