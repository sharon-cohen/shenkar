import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import Main from './common/Main';
import {View} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(250,250,250)'}}>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </View>
  );
}
