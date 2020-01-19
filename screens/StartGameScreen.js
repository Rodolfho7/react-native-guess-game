import React from 'react';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} color="red" />
          <Button title="Confirm" onPress={() => {}} color="green" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10 //same as marginBotton and marginTop
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    elevation: 5, //android only
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});

export default StartGameScreen;