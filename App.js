import React from 'react';
import { TabNavigator, Screen } from 'react-navigation';

// import components ##############################################
import Navigation from './components/Navigation';

// import ReactNative from 'react-native';

// redux configuration ############################################
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Navigation />
      </Provider>
    )
  }
}
