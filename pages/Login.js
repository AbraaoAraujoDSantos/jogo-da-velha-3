import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, Alert} from 'react-native';
import Constants from 'expo-constants';


import { Card } from 'react-native-paper';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Loign Easy Vagas
        </Text>
        
      <TextInput
        style={styles.teste}
        placeholder="  Insira seu nome"
        keyboardType="text"
      />
      <TextInput
        style={styles.teste}
        placeholder="  Digite sua senha"
        keyboardType="text"
      />
      <Button
        title="Login"
        onPress={() => Alert.alert('Login Realizado')}
      />
      <Card>
      </Card>
    </View>


    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'bold',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  teste: {
    fontSize: 15,
    backgroundColor: "#fff",
    borderColor: "#00000",
    borderWidth: 2
  
  }
  
  
});