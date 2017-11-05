import React from 'react';

// import components ##############################################
// import Navigation from './components/Navigation';
// import Home from './components/home';

// redux configuration ############################################
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <AppWithNavigationState />
      </Provider>
    )
  }
}
