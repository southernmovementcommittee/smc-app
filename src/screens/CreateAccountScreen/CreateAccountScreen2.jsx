import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import CheckBox from 'expo-checkbox';
import { styles } from './CreateAccountScreen2CSS';
const smclogo = require('../../assets/images/smclogo.png');

const CreateAccountScreen2 = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={smclogo} />
      </View>
      <Text style={styles.header} >CREATE NEW ACCOUNT</Text>
      <View style={styles.formContainer}>
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
        <View style={styles.textContainer}>
          <Text style={styles.text} >ARE YOU BLACK?</Text>
        </View>
        <View style={styles.checkboxesContainer}>
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>Yes</Text>
            <CheckBox
              value={selectedOption === 'yes'}
              onValueChange={() => handleSelectOption('yes')}
              color={selectedOption === 'yes' ? '#FFD600' : ''}
              style={styles.checkbox}
              />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>No</Text>
            <CheckBox
              value={selectedOption === 'no'}
              onValueChange={() => handleSelectOption('no')}
              color={selectedOption === 'no' ? '#FFD600' : ''}
              style={styles.checkbox}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Step3')}>
          <Text style={styles.primaryButtonText} >Continue to Step 3</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


export default CreateAccountScreen2;