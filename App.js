import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>    
        <View style = {styles.v1}>

        </View>
        <View style = {styles.v2}>
          
        </View>
        <View style = {styles.v3}>
          
        </View>
        <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  v2:{
    flex: 1,
    backgroundColor: 'red'
  },
  v3:{
    flex: 1,
    backgroundColor: 'green'
  },v1:{
    flex: 1,
    backgroundColor: 'yellow'
  }
});
