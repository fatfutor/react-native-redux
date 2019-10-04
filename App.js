import React from 'react';
import { Provider } from 'react-redux';
import { store } from './source/store';
import Navigation from './source/components/screens/Navigation'

export default function App() {
  return (
  <Provider store={store}>
    <Navigation />
  </Provider>
  );
}