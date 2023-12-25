import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './Step1CSS';
import { useState } from 'react';

const smclogo = require('../../../assets/images/smclogo.png');

export const Step1 = ({ goToStep2, updateUserObj }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const storeUserDataAndContinue = () => {
    const currentUserData = {
      email,
      password
    }
    updateUserObj(currentUserData);
    goToStep2();
  }

  return (
    <>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={smclogo} />
      </View>
      <Text style={styles.header} >CREATE NEW ACCOUNT</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#808080"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#808080"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#808080"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.primaryButton} onPress={storeUserDataAndContinue}>
          <Text style={styles.primaryButtonText} >Continue to Step 2</Text>
        </TouchableOpacity>
      </View>
    </>
  )
};