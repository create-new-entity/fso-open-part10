
import { useFormik } from 'formik';
import { TextInput, Button, StyleSheet, View } from 'react-native';


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


const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values)
      formik.handleReset()
    }
  });
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.textInputStyle}
        placeholder='username'
        value={formik.values.username}
        onChange={formik.handleChange('username')}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder='password'
        secureTextEntry
        value={formik.values.password}
        onChange={formik.handleChange('password')}
      />
      <Button
        title='Sign In'
        onPress={formik.handleSubmit}
      />
    </View>
  );
};

export default SignIn;