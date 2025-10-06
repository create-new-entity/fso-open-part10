
import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignInContainer';


describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('Calls onSubmit function with correct arguments when a valid form is submitted', async () => {
        const onSubmit = jest.fn();
        render(<SignInContainer onSubmit={onSubmit} />);

        await fireEvent.changeText(screen.getByPlaceholderText('username'), 'kalle');
        await fireEvent.changeText(screen.getByPlaceholderText('password'), 'password');
        await fireEvent.press(screen.getByText('Sign In'));

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
        });

        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'kalle',
            password: 'password',
        });
    });
  });
});