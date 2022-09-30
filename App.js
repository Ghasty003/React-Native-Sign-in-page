import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Platform, ImageBackground, View } from 'react-native';
import SigninScreen from './screens/SigninScreen';

export default function App() {

  return (
    <View style={styles.container}>
      <SigninScreen/>
      {/* <StatusBar/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});