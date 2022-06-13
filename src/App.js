import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './redux/reducers';

const store = createStore(allReducers);

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}></PersistGate> */}
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
