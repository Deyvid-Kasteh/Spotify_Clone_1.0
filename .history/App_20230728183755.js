import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './StackNavigator';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      {/* <Text>teste</Text> */}
      <StatusBar style="auto" />
      <BottomTabs/>
    </NavigationContainer>
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
