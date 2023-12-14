import React from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity, Image, CheckBox  } from 'react-native';
import { styles } from './CreateAccountScreen2CSS';
const smclogo = require('../../assets/images/smclogo.png');

const CreateAccountScreen2 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={smclogo} />
      </View>
      {/* <Text style={styles.header} >CREATE NEW ACCOUNT</Text> */}
      <View style={styles.shortInputContainer}>
        <TextInput placeholder="FIRST NAME" style={styles.shortInput} />
        <TextInput placeholder="LAST NAME" style={styles.shortInput} />
      </View>
      <TextInput placeholder="PHONE NUMBER" secureTextEntry style={styles.input} />
      <TextInput placeholder="STREET ADDRESS" secureTextEntry style={styles.input} />
      <TextInput placeholder="STREET ADDRESS 2" secureTextEntry style={styles.input} />
      <View style={styles.shortInputContainer}>
        <TextInput placeholder="CITY" style={styles.shortInput} />
        <TextInput placeholder="STATE" style={styles.shortInput} />
      </View>
      <TextInput placeholder="POSTAL/ZIP CODE" style={styles.shortInput} />
      <Text style={styles.header} >ARE YOU BLACK?</Text>

      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Step3')}>
        <Text style={styles.primaryButtonText} >Continue to Step 3</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


export default CreateAccountScreen2;