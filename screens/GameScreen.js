import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rndNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNumber;
}

const GameScreen = props => {

  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" color="red" onPress={() => {}} />
        <Button  title="GREATER" color="green" onPress={() => {}} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    maxWidth: '80%',
    width: 300
  }
});

export default GameScreen;