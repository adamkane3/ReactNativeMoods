import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
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

const imageSrc = require('../assets/butterflies.png');

const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();
  const [hasSelected, setHasSelected] = useState(false);
  const context = useAppContext();

  const handleSelect = useCallback(() => {
    if (selectedMood) {
      context.handleSelectMood(selectedMood);
      setSelectedMood(undefined);
      setHasSelected(true);
    }
  }, [selectedMood]);

  if (hasSelected) {
    return (
      <View style={styles.moodListContainer}>
        <Image source={imageSrc} style={styles.image} resizeMode={'contain'} />
        <Pressable
          style={styles.submitMoodButton}
          onPress={() => setHasSelected(false)}>
          <Text style={styles.buttonText}>Thanks!</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.moodListContainer}>
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
    borderColor: theme.colorPurple,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    height: 230,
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
    backgroundColor: theme.colorPurple,
  },
  submitMoodButtonPressed: {
    opacity: 0.4,
  },
  image: {
    alignSelf: 'center',
    height: 100,
    width: 300,
  },
  buttonText: {
    fontSize: 16,
    color: theme.colorWhite,
  },
});

export default MoodPicker;
