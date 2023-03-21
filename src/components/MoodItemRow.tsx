import React, {useCallback} from 'react';
import {View, StyleSheet, Text, Button, LayoutAnimation} from 'react-native';
import {MoodOptionWithTimestamp} from '../types';
import format from 'date-fns/format';
import {theme} from '../styles/globalStyles';
import {useAppContext} from '../App.provider';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

const MoodItemRow: React.FC<MoodItemRowProps> = ({item}) => {
  const context = useAppContext();
  const handleDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    context.handleDeleteMood(item);
  }, []);

  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
      </Text>
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  moodValue: {textAlign: 'center', fontSize: 40, marginRight: 10},
  moodDate: {textAlign: 'center', color: theme.colorLavender},
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {fontSize: 18, color: theme.colorPurple, fontWeight: 'bold'},
  iconAndDescription: {flexDirection: 'row', alignItems: 'center'},
});

export default MoodItemRow;
