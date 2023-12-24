import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import CheckBox from 'expo-checkbox';

import { styles } from './Step2CSS';

const smclogo = require('../../../assets/images/smclogo.png');

export const Step2 = ({
  validateForm,
  formData,
  setFormData,
  errors,
  clearError,
  goToStep3
}) => {
  /**
   * 
   * @param {string} clearErrorType
   * @description Sets the state of inputFocused to be true and the clears the errors for the input errorType that's passed to it.
   */
  const handleFocus = (inputErrorType) => {
    clearError(inputErrorType);
  }

  const handleSelectOption = (option) => {
    setFormData({ ...formData, selectedOption: option });
    clearError('selectedOption');
  }

  const storeUserDataAndContinue = () => {
    if (validateForm(2)) {
      let currentUserData = { ...formData };
      const { selectedOption: isBlack, ...rest } = currentUserData;
      currentUserData = { isBlack, ...rest };
      console.log('userData: ', currentUserData);
      goToStep3();
    }
  }

  return (
    <>
      <View style={styles.imageContainer2}>
        <Image style={styles.image2} source={smclogo} />
      </View>
      <Text style={styles.header2}>CREATE NEW ACCOUNT</Text>
      <View style={styles.formContainer2}>
        <View style={styles.shortInputContainer2}>
          <TextInput 
            placeholder={!errors.firstName ? "FIRST NAME" : errors.firstName}
            placeholderTextColor={!errors.firstName ? "#808080" : 'red'}
            style={!errors.firstName ? styles.shortInput2 : styles.shortErrorInput2}
            value={formData.firstName}
            onChangeText={text => setFormData({ ...formData, firstName: text })}
            onFocus={() => handleFocus('firstName')}
            onBlur={() => validateForm(2)}
          />
          <TextInput 
            placeholder={!errors.lastName ? "LAST NAME" : errors.lastName}
            placeholderTextColor={!errors.lastName ? "#808080" : 'red'}
            style={!errors.lastName ? styles.shortInput2 : styles.shortErrorInput2}
            value={formData.lastName}
            onChangeText={text => setFormData({ ...formData, lastName: text })}
            onFocus={() => handleFocus('lastName')}
            onBlur={() => validateForm(2)}
          />
        </View>
        <TextInput 
          placeholder={!errors.phoneNum ? 'PHONE NUMBER' : errors.phoneNum.includes('requires') || 'PHONE NUMBER'}
          placeholderTextColor={!errors.phoneNum ? "#808080" : 'red'}
          style={!errors.phoneNum ? styles.input2 : styles.errorInput}
          value={formData.phoneNum}
          keyboardType='phone-pad'
          onChangeText={text => setFormData({ ...formData, phoneNum: text })}
          onFocus={() => handleFocus('phoneNum')}
          onBlur={() => validateForm(2)}
        />
        {
          errors.phoneNum === 'invalid' &&
          <View style={styles.errorTextContainer}>
            <Text style={styles.errorText} numberOfLines={2} ellipsizeMode='middle'>
              Phone number is invalid
            </Text>
          </View>
        }
        <TextInput 
          placeholder="STREET ADDRESS"
          placeholderTextColor={!errors.address ? "#808080" : 'red'}
          style={!errors.address ? styles.input2 : styles.errorInput}
          value={formData.address}
          onChangeText={text => setFormData({ ...formData, address: text })}
          onFocus={() => handleFocus('address')}
          onBlur={() => validateForm(2)}
        />
        <TextInput
          placeholder="STREET ADDRESS 2"
          placeholderTextColor={!errors.address2 ? "#808080" : 'red'}
          style={!errors.address2 ? styles.input2 : styles.errorInput}
          value={formData.address2}
          onChangeText={text => setFormData({ ...formData, address2: text })}
          onFocus={() => handleFocus('address2')}
          onBlur={() => validateForm(2)}
        />
        <View style={styles.shortInputContainer2}>
          <TextInput
            placeholder="CITY"
            placeholderTextColor={!errors.city ? "#808080" : 'red'}
            style={!errors.city ? styles.shortInput2 : styles.shortErrorInput2}
            value={formData.city}
            onChangeText={text => setFormData({ ...formData, city: text })}
            onFocus={() => handleFocus('city')}
            onBlur={() => validateForm(2)}
          />
          <TextInput
            placeholder="STATE"
            placeholderTextColor={!errors.state ? "#808080" : 'red'}
            style={!errors.state ? styles.shortInput2 : styles.shortErrorInput2}
            value={formData.state}
            onChangeText={text => setFormData({ ...formData, state: text })}
            onFocus={() => handleFocus('state')}
            onBlur={() => validateForm(2)}
          />
        </View>
        <TextInput
          placeholder="ZIP CODE"
          placeholderTextColor={!errors.zipCode ? "#808080" : 'red'}
          style={!errors.zipCode ? styles.shortInput2 : styles.shortErrorInput2}
          value={formData.zipCode}
          keyboardType='number-pad'
          onChangeText={text => setFormData({ ...formData, zipCode: text })}
          onFocus={() => handleFocus('zipCode')}
          onBlur={() => validateForm(2)}
        />
        <View style={styles.textContainer2}>
          <Text style={styles.text2} >ARE YOU BLACK?</Text>
        </View>
        <View style={styles.checkboxesAndErrorContainer}>
            <View style={styles.checkboxesContainer2}>
              <View style={styles.checkboxContainer2}>
                <Text style={styles.label}>Yes</Text>
                <CheckBox
                  value={formData.selectedOption === 'yes'}
                  onValueChange={() => handleSelectOption('yes')}
                  color={formData.selectedOption === 'yes' ? '#FFD600' : ''}
                  style={styles.checkbox2}
                />
              </View>
              <View style={styles.checkboxContainer2}>
                <Text style={styles.label2}>No</Text>
                <CheckBox
                  value={formData.selectedOption === 'no'}
                  onValueChange={() => handleSelectOption('no')}
                  color={formData.selectedOption === 'no' ? '#FFD600' : ''}
                  style={styles.checkbox2}
                />
              </View>
            </View>
            {
            errors.selectedOption &&
            <View>
              <Text style={styles.errorText}>{ errors.selectedOption }</Text>
            </View>
            }
          </View>
        <TouchableOpacity style={styles.primaryButton2} onPress={storeUserDataAndContinue}>
          <Text style={styles.primaryButtonText2}>Continue to Step 3</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
