import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import CheckBox from 'expo-checkbox';

import { styles } from './Step2CSS';

const smclogo = require('../../../assets/images/smclogo.png');

export const Step2 = ({ goToStep3, updateUserObj }) => {
  const [selectedOption, setSelectedOption] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  }

  const storeUserDataAndContinue = () => {
    const currentUserData = {
      firstName,
      lastName,
      phoneNum,
      address1,
      address2,
      city,
      state,
      zipCode,
      'isBlack': selectedOption
    }
    updateUserObj(currentUserData);
    goToStep3();
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
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <TextInput 
            placeholder="LAST NAME"
            placeholderTextColor="#808080"
            style={styles.shortInput2}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>
        <TextInput 
          placeholder="PHONE NUMBER"
          placeholderTextColor="#808080"
          style={styles.input2}
          value={phoneNum}
          keyboardType='phone-pad'
          onChangeText={text => setPhoneNum(text)}
        />
        <TextInput 
          placeholder="STREET ADDRESS"
          placeholderTextColor="#808080"
          style={styles.input2}
          value={address1}
          onChangeText={text => setAddress1(text)}
        />
        <TextInput
          placeholder="STREET ADDRESS 2"
          placeholderTextColor="#808080"
          style={styles.input2}
          value={address2}
          onChangeText={text => setAddress2(text)}
        />
        <View style={styles.shortInputContainer2}>
          <TextInput
            placeholder="CITY"
            placeholderTextColor="#808080"
            style={styles.shortInput2}
            value={city}
            onChangeText={text => setCity(text)}
          />
          <TextInput
            placeholder="STATE"
            placeholderTextColor="#808080"
            style={styles.shortInput2}
            value={state}
            onChangeText={text => setState(text)}
          />
        </View>
        <TextInput
          placeholder="POSTAL/ZIP CODE"
          placeholderTextColor="#808080"
          style={styles.shortInput2}
          value={zipCode}
          keyboardType='number-pad'
          onChangeText={text => setZipCode(text)}
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
        <TouchableOpacity style={styles.primaryButton2} onPress={storeUserDataAndContinue}>
          <Text style={styles.primaryButtonText2} >Continue to Step 3</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
