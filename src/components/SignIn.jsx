
import { useSignIn } from '../hooks/useSignIn';

const SignIn = () => {
  const [signIn, result] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit}/>
  );
}


export default SignIn;