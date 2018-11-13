import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Counter() {
  let [count, setCount] = useState(0);

  return <Text onPress={() => setCount(count + 1)}>{count}</Text>;
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
