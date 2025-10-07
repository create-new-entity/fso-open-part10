
import { useFormik } from 'formik';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native';
import * as yup from 'yup';
import Text from './Text';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

const styles = {
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
        padding: 10
    },
    textInput: {
        alignSelf: 'stretch',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        padding: 5
    },
    submitButton: {
        alignSelf: 'stretch'
    },
    error: {
        color: theme.colors.red,
        borderColor: theme.colors.red
    }
};

const ownerNameValidator = yup.string().required().min(5, 'ownerName should have at least 5 characters.');
const repositoryNameValidator = yup.string().required();

const ratingValidator = yup
  .number()
  .typeError('Rating must be a number.')
  .min(0, 'Rating must be at least 0.')
  .max(100, 'Rating cannot exceed 100.');

const reviewFormSchema = yup.object({
  ownerName: ownerNameValidator,
  repositoryName: repositoryNameValidator,
  rating: ratingValidator,
  review: yup.string().optional()
});

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: 0,
    review: ''
};


const ReviewForm = () => {
    const [handleCreateReview] = useCreateReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const data = await handleCreateReview(values);
        navigate(`/repository/${data.createReview.repositoryId}`);
    }

    const formik = useFormik({
        initialValues,
        validationSchema: reviewFormSchema,
        onSubmit
    });

    const hasOwnerNameError = formik.touched.ownerName && formik.errors.ownerName
    const hasNameError = formik.touched.repositoryName && formik.errors.repositoryName
    const hasRatingError = formik.touched.rating && formik.errors.rating
    const hasReviewError = formik.touched.review && formik.errors.review

    return (
        <View style={styles.rootContainer}>
            <TextInput
                style={[styles.textInput, hasOwnerNameError && styles.error ]}
                placeholder='ownerName'
                value={formik.values.ownerName}
                onChangeText={formik.handleChange('ownerName')}
            />
            {
                hasOwnerNameError && (
                    <Text style={{ color: theme.colors.red }}>{formik.errors.ownerName}</Text>
                )
            }
            <TextInput
                style={[styles.textInput, hasNameError && styles.error ]}
                placeholder='repositoryName'
                value={formik.values.repositoryName}
                onChangeText={formik.handleChange('repositoryName')}
            />
            {
                hasNameError && (
                    <Text style={{ color: theme.colors.red }}>{formik.errors.repositoryName}</Text>
                )
            }
            <TextInput
                style={[styles.textInput, hasRatingError && styles.error]}
                placeholder='rating'
                value={formik.values.rating}
                onChangeText={formik.handleChange('rating')}
            />
            {
                hasRatingError && (
                    <Text style={{ color: theme.colors.red }}>{formik.errors.rating}</Text>
                )
            }
            <TextInput
                style={[styles.textInput, hasReviewError && styles.error ]}
                placeholder=''
                multiline
                value={formik.values.review}
                onChangeText={formik.handleChange('review')}
            />
            {
                hasReviewError && (
                    <Text style={{ color: theme.colors.red }}>{formik.errors.review}</Text>
                )
            }
            <View style={styles.submitButton}>
                <Button
                    title='Create a review'
                    onPress={formik.handleSubmit}
                />
            </View>
        </View>
    );
};

export default ReviewForm;