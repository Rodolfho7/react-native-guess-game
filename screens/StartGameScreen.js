import React, { useState } from 'react';

import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {

  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, '')); //substitui qualquer caractere diferente de numero por vazio
  }

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99 || !chosenNumber) {
      Alert.alert(
        'Invalid Number!',
        'Has to be a number between 1 and 99 inclusive',
        [{
          text: 'Ok',
          style: 'destructive',
          onPress: resetInputHandler
        }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  }

  let confirmedOutput = null;

  if (confirmed) {
    confirmedOutput =
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>
          {selectedNumber}
        </NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            BlurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue} />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWidth}>
              <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
            </View>
            <View style={styles.buttonWidth}>
              <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
    //maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  buttonWidth: {
    //width: 100,
    width: Dimensions.get('window').width / 4
  },
  input: {
    width: 60,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});

export default StartGameScreen;