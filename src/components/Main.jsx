

import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes, Navigate, useParams } from 'react-router-native';
import SignIn from './SignIn';
import useRepositories from '../hooks/useRepositories';
import { useEffect } from 'react';
import Repository from './Repository';
import ReviewForm from './ReviewForm';
import SignUp from './SignUp';
import UserReviews from './UserReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/create_review" element={<ReviewForm/>} />
        <Route path="/my_reviews" element={<UserReviews/>}/>
        <Route path="/repository/:id" element={<Repository />} />
        <Route path="/sign_in" element={<SignIn/>} />
        <Route path="/sign_up" element={<SignUp/>}/>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;