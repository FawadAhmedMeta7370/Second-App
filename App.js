import React, { useState } from 'react';
import {
  StyleSheet, ImageBackground,
  SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import color from './components/color';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOverScreen';
import GameOverScreen from './screens/GameOverScreen';
import StartGameScreen from './screens/StartGameScreen';


function App() {

  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [rounds, setRounds] = useState(0)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true)
    setRounds(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null)
    setRounds(0)
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler} />
    )
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
      userNumber={userNumber}
      roundsNumber={rounds}
      onStartNewGame={startNewGameHandler} />
    )
  }

  return (
    <LinearGradient colors={[color.gradient1, color.gradient2]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./images/num.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.35
  }
});

export default App;
