import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Redux
import { Provider } from 'react-redux';
import store from './store';


//Load Fonts 
import { AppLoading } from "expo";
import { loadFonts } from "./styles/fonts";

//Root Stack Navigations
import { RootStackNav } from './navigation';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  if (!loaded) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setLoaded(true)} />
    );
  }
  return (
    <Provider store={store}>
      <RootStackNav/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
