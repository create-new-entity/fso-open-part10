
import { useFormik } from 'formik';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  },
  textInputStyle: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    width: '95%'
  }
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Must be at least 5 characters long.')
    .required('username is required.'),
  password: yup
    .string()
    .min(5, 'Must be at least 5 characters long.')
    .required('password is required.'),
});


const SignInContainer = (props) => {

  const { onSubmit } = props

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  const borderErrorStyle = { borderColor: theme.colors.red }
  const hasUserNameError = formik.touched.username && formik.errors.username
  const hasPasswordError = formik.touched.password && formik.errors.password

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={[styles.textInputStyle, hasUserNameError && borderErrorStyle]}
        placeholder='username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {
        hasUserNameError && (
          <Text style={{ color: theme.colors.red }}>{formik.errors.username}</Text>
        )
      }
      <TextInput
        style={[styles.textInputStyle, hasPasswordError && borderErrorStyle]}
        placeholder='password'
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {
        hasPasswordError && (
          <Text style={{ color: theme.colors.red }}>{formik.errors.password}</Text>
        )
      }
      <Button
        title='Sign In'
        onPress={formik.handleSubmit}
      />
    </View>
  );
};

export default SignInContainer;