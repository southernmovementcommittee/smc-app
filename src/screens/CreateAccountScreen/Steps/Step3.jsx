import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Pressable, Platform } from 'react-native';

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

  const isAndroid = Platform.OS === 'android';

  const handleBlur = (inputErrorType) => {
    validateForm(3);
    clearError(inputErrorType);
  }

  const storeUserDataAndContinue = () => {
    if (validateForm(3)) {
      // Removes confirm password from user object
      const { confirmPassword, ...currentUserData } = formData
      createUserObj(currentUserData);
    }
  }

  const openAndroidDatePicker = () => {
    if (isAndroid) {
      setFormData({ ...formData, showDatePicker: true})
    }
  }

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
        <TextInput
          placeholder="BIO"
          placeholderTextColor={!errors.bio ? '#808080' : 'red'}
          multiline={true}
          numberOfLines={4}
          style={isAndroid ? styles.androidTextArea : styles.textArea}
          onFocus={() => clearError('bio')}
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
