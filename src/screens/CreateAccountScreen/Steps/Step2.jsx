import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import CheckBox from 'expo-checkbox';

import { styles } from './Step2CSS';


const smclogo = require('../../../assets/images/smclogo.png');

export const Step2 = ({ goToStep3 }) => {
  const [selectedOption, setSelectedOption] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  }
  return (
    <>
      <View style={styles.imageContainer2}>
        <Image style={styles.image2} source={smclogo} />
      </View>
      <Text style={styles.header2} >CREATE NEW ACCOUNT</Text>
      <View style={styles.formContainer2}>
        <View style={styles.shortInputContainer2}>
          <TextInput 
            placeholder="FIRST NAME"
            placeholderTextColor="#808080"
            style={styles.shortInput2}
          />
          <TextInput 
            placeholder="LAST NAME"
            placeholderTextColor="#808080"
            style={styles.shortInput2}
          />
        </View>
        <TextInput 
          placeholder="PHONE NUMBER"
          placeholderTextColor="#808080"
          secureTextEntry style={styles.input2} 
        />
        <TextInput 
          placeholder="STREET ADDRESS"
          placeholderTextColor="#808080"
          secureTextEntry style={styles.input2}
        />
        <TextInput
          placeholder="STREET ADDRESS 2"
          placeholderTextColor="#808080"
          secureTextEntry style={styles.input2} 
        />
        <View style={styles.shortInputContainer2}>
          <TextInput
            placeholder="CITY"
            placeholderTextColor="#808080"
            style={styles.shortInput2}
          />
          <TextInput
            placeholder="STATE"
            placeholderTextColor="#808080"
            style={styles.shortInput2}
          />
        </View>
        <TextInput
          placeholder="POSTAL/ZIP CODE"
          placeholderTextColor="#808080"
          style={styles.shortInput2} 
        />
        <View style={styles.textContainer2}>
          <Text style={styles.text2} >ARE YOU BLACK?</Text>
        </View>
        <View style={styles.checkboxesContainer2}>
          <View style={styles.checkboxContainer2}>
            <Text style={styles.label}>Yes</Text>
            <CheckBox
              value={selectedOption === 'yes'}
              onValueChange={() => handleSelectOption('yes')}
              color={selectedOption === 'yes' ? '#FFD600' : ''}
              style={styles.checkbox2}
              />
          </View>
          <View style={styles.checkboxContainer2}>
            <Text style={styles.label2}>No</Text>
            <CheckBox
              value={selectedOption === 'no'}
              onValueChange={() => handleSelectOption('no')}
              color={selectedOption === 'no' ? '#FFD600' : ''}
              style={styles.checkbox2}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.primaryButton2} onPress={() => goToStep3()}>
          <Text style={styles.primaryButtonText2} >Continue to Step 3</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
