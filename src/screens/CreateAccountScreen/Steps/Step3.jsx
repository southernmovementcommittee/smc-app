import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Pressable, Platform, ScrollView } from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from './Step3CSS';
const smclogo = require('../../../assets/images/smclogo.png');

export const Step3 = ({
  validateForm,
  formData,
  setFormData,
  errors,
  clearError,
  createUserObj
}) => {
  const [bioIsFocused, setBioIsFocused] = useState(false);
  const isAndroid = Platform.OS === 'android';

  /**
   * 
   * @param {string} inputErrorType
   * @description Validates the inputs currently being displayed and then clears the errors for whichever input is currently being interacted with. 
   */
  const handleBlur = (inputErrorType) => {
    validateForm(3);
    setBioIsFocused(false);
    clearError(inputErrorType);
  }

  const handleBioFocus = () => {
    setBioIsFocused(true);
    clearError('bio');
  }
  /**
   * @description After running validation for the inputs currently being displayed, this function removes the confirm password from the formData object and then passes that updated object to the createUserObj function.
   */
  const storeUserDataAndContinue = () => {
    if (validateForm(3)) {
      // Removes confirm password from formData object
      const { confirmPassword, ...currentUserData } = formData
      createUserObj(currentUserData);
    }
  }

  /**
   * @description Sets the showDatePicker property to be true in the formData object.
   */
  const openAndroidDatePicker = () => {
    if (isAndroid) {
      setFormData({ ...formData, showDatePicker: true})
    }
  }

  /**
   * 
   * @param {Date} selectedDate
   * @description Takes in a date object as an arguement and then sets to the dateOfBirth property as a string value in the formData object. It then clears the error state for any dateOfBirth errors. 
   */
  const handleConfirm = (selectedDate) => {
    setFormData({
      ...formData,
      dateOfBirth: selectedDate.toDateString(),
      showDatePicker: false,
    });
    clearError('dateOfBirth');
  };

  return (
    <>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={smclogo} />
        <View style={styles.arrowContainer}>
          <FontAwesomeIcon name='arrow-up' size={45} color='#000' />
        </View>
      </View>
      <Text style={styles.header}>
        <Text style={styles.accentHeader}>Upload </Text>your image here
      </Text>
      <View style={styles.formContainer}>
        <View style={!bioIsFocused ? styles.formContainer : styles.inputHidden}>
        <TextInput
          placeholder={!errors.occupation ? 'OCCUPATION' : errors.occupation}
          placeholderTextColor={!errors.occupation ? '#808080' : 'red'}
          style={!errors.occupation ? styles.input : styles.errorInput}
          value={formData.occupation}
          onFocus={() => clearError('occupation')}
          onBlur={() => handleBlur('occupation')}
          onChangeText={text => setFormData({ ...formData, occupation: text})}
        />
        <Pressable style={styles.pressable} onPress={openAndroidDatePicker}>
          <TextInput
            placeholder={!errors.dateOfBirth ? 'DATE OF BIRTH' : errors.dateOfBirth}
            placeholderTextColor={!errors.dateOfBirth ? '#808080' : 'red'}
            value={formData.dateOfBirth}
            onFocus={() => clearError('dateOfBirth')}
            onBlur={() => handleBlur('dateOfBirth')}
            style={!errors.dateOfBirth ? styles.input : styles.errorInput}
            editable={false}
            onPressIn={() => setFormData({ ...formData, showDatePicker: true})}
            onChangeText={text => setFormData({ ...formData, dateOfBirth: text})}
          />
        </Pressable>
        <DateTimePickerModal
          isVisible={formData.showDatePicker}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={() => setFormData({ ...formData, showDatePicker: false})}
          />
          </View>
        <TextInput
          placeholder="BIO"
          placeholderTextColor={!errors.bio ? '#808080' : 'red'}
          multiline={true}
          numberOfLines={4}
          style={isAndroid ? styles.androidTextArea : styles.textArea}
          onFocus={handleBioFocus}
          onBlur={() => handleBlur('bio')}
          value={formData.bio}
          onChangeText={text => setFormData({ ...formData, bio: text})}
        />

        <TouchableOpacity style={styles.primaryButton} onPress={storeUserDataAndContinue}>
          <Text style={styles.primaryButtonText} >CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
