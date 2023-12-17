import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Pressable, Platform } from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from './Step3CSS';
const smclogo = require('../../../assets/images/smclogo.png');

export const Step3 = ({setIsAuth}) => {
  
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState('');

  const isAndroid = Platform.OS === 'android';

  const openAndroidDatePicker = () => {
    if (isAndroid) {
      setShowDatePicker(true);
    }
  }

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate.toDateString());
    setShowDatePicker(false);
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
          placeholder="OCCUPATION"
          placeholderTextColor="#808080"
          style={styles.input}
        />
        <Pressable style={styles.pressable} onPress={openAndroidDatePicker}>
          <TextInput
            placeholder="DATE OF BIRTH"
            placeholderTextColor="#808080"
            value={date}
            style={styles.input}
            editable={false}
            onPressIn={() => setShowDatePicker(true)}
          />
        </Pressable>
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={() => setShowDatePicker(false)}
        />
        <TextInput
          placeholder="BIO"
          placeholderTextColor="#808080"
          multiline={true}
          numberOfLines={4}
          style={ isAndroid ? styles.androidTextArea : styles.textArea} />
        <TouchableOpacity style={styles.primaryButton} onPress={() => setIsAuth(true)}>
          <Text style={styles.primaryButtonText} >CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
