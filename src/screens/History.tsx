import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useAppContext} from '../App.provider';
import globalStyles, {theme} from '../styles/globalStyles';
import MoodItemRow from '../components/MoodItemRow';

const History: React.FC = props => {
  const context = useAppContext();
  return (
    <ScrollView>
      <View style={{...styles.container, ...globalStyles.container}}>
        {context.moodList.map(item => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorPurple,
  },
});

export default History;
