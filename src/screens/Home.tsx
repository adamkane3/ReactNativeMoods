import React from 'react';
import {View, StyleSheet} from 'react-native';
import MoodPicker from '../components/MoodPicker';
import globalStyles from '../styles/globalStyles';

const Home: React.FC = props => {
  return (
    <View style={[{...globalStyles.container, ...styles.container}]}>
      <MoodPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default Home;
