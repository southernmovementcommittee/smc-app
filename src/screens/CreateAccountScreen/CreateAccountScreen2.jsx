import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image  } from 'react-native';
import { styles } from './CreateAccountScreenCSS';
const smclogo = require('../../assets/images/smclogo.png');

const CreateAccountScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={smclogo} />
      </View>
      <Text style={styles.header} >CREATE NEW ACCOUNT 2</Text>
      {/* <TextInput placeholder="Email Address" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} /> */}
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Step2')}>
        <Text style={styles.primaryButtonText} >Continue to Step 3</Text>
      </TouchableOpacity>
    </View>
  );
};


export default CreateAccountScreen2;