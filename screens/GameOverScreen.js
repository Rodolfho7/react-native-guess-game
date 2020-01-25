import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.screen}>
        <Text style={styles.font}>The Game is Over!</Text>
        <View style={styles.imageContainer}>
          <Image
            // source={require('../assets/success.png')}
            source={{ uri: 'https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }}
            style={styles.image}
            resizeMode='cover' />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.font}>
            You needed
            <Text style={styles.marked}> {props.rounds} </Text>
            tries to reach to the number
            <Text style={styles.marked}> {props.correctNumber} </Text>
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <MainButton onPress={props.onBackToStart}>
          NEW GAME
        </MainButton>
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
    marginBottom: 10
  },
  card: {
    alignItems: 'center'
  },
  font: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 10,
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7
  },
  textContainer: {
    width: '70%',
    textAlign: 'center',
  },
  marked: {
    color: Colors.primary
  }
});


export default GameOverScreen;