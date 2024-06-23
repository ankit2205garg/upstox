import { Text, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import ListHolding from '../../components/ListHoldings';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListHolding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0

  },
});
