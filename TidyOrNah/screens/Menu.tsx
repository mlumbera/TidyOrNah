import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>; // Adjust the type if needed
}

const Menu: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tidy or Nah!</Text>
      <Button title="Check Your Desk!" onPress={() => navigation.navigate('Upload')} />
      <Button title="Desk Statistics" onPress={() => navigation.navigate('Stats')} />
      <Button title="Acknowledgements" onPress={() => navigation.navigate('Acknowledge')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Menu;
