import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignedInStack from './navigation';

export default function App() {
  return (
    <SafeAreaProvider style={styles.androidSafeArea}>
      <SignedInStack />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    // paddingTop: Platform.OS === 'android' ? 25 : 0
    paddingTop: 25
  }
});
