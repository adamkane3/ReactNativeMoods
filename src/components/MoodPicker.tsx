import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {useAppContext} from '../App.provider';
import {theme} from '../styles/globalStyles';
import {MoodOptionType} from '../types';

const moodOptions: MoodOptionType[] = [
  {emoji: '🧑‍💻', description: 'studious'},
  {emoji: '🤔', description: 'pensive'},
  {emoji: '😊', description: 'happy'},
  {emoji: '🥳', description: 'celebratory'},
  {emoji: '😤', description: 'frustrated'},
];

const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();
  const context = useAppContext();

  const handleSelect = useCallback(() => {
    if (selectedMood) {
      context.handleSelectMood(selectedMood);
      setSelectedMood(undefined);
    }
  }, [selectedMood]);

  return (
    <View style={[{borderColor: theme.colorPurple}, styles.moodListContainer]}>
      <Text>How are you feeling today?</Text>
      <View style={styles.moodList}>
        {moodOptions.map(option => (
          <View key={option.emoji}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[
                styles.moodItem,
                option.emoji === selectedMood?.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}>
              <Text style={styles.moodText}>{option.emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option.description : ' '}
            </Text>
          </View>
        ))}
      </View>
      <Pressable
        disabled={!selectedMood}
        style={({pressed}) => [
          {
            opacity: pressed || !selectedMood ? 0.4 : 1,
            backgroundColor: '#2277ee',
          },
          styles.submitMoodButton,
        ]}
        onPress={handleSelect}>
        <View
          style={[
            styles.submitMoodButton,
            {backgroundColor: theme.colorPurple},
          ]}>
          <Text style={{color: theme.colorWhite}}>Choose</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodListContainer: {
    padding: 20,
    borderWidth: 3,
    borderRadius: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  moodText: {
    fontSize: 24,
  },
  moodItem: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: '#454c73',
    borderColor: '#fff',
  },
  descriptionText: {
    color: '#454c73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  submitMoodButton: {
    height: 45,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  submitMoodButtonPressed: {
    opacity: 0.4,
  },
});

export default MoodPicker;
