import React from 'react';
import { View, TextInput, TouchableOpacity  } from 'react-native';
import { styles } from './CreateAccountScreenCSS';

const CreateAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email Address" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
      <TouchableOpacity  title="Continue to Step 2" onPress={() => {/* handle sign-up logic here */}} />
    </View>
  );
};


export default CreateAccountScreen;