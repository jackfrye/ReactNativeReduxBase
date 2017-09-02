import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'
import Example from './components/Example'

console.log(typeof Example)

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Example/>
      </Provider>
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
