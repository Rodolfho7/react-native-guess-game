import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.font}>The game is over!</Text>
        <Text style={styles.font}>{props.rounds} tries</Text>
        <Text style={styles.font}>The number was: {props.correctNumber}</Text>
      </Card>
      <View style={styles.button}>
        <Button title='New Game' onPress={props.onBackToStart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 200,
    marginTop: 10
  },
  card: {
    alignItems: 'center'
  },
  font: {
    fontSize: 23
  }
});


export default GameOverScreen;