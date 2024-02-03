import DateTimePicker from '@react-native-community/datetimepicker';
import { useState, useEffect } from "react";
import {Pressable, View, Text, TextInput, TouchableOpacity, Image, Platform } from 'react-native'
import { formInputs } from "../../../constants/createEventFormInputs";
import { clearError, validateForm } from "../../../helpers/CreateEvent/helpers";

import { styles } from './EventCreationScreenCSS';

import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingView";

const imageIcon = require('../../../assets/image.png');

const EventCreationScreen = ({navigation}) => {
  const [formData, setFormData] = useState(formInputs);
  const [errors, setErrors] = useState(formInputs);
  const [date, setDate] = useState(new Date());

const isAndroid = Platform.OS === 'android';

  /**
   * @description Sets the showDatePicker property to be true in the formData object.
   */
  const openAndroidDatePicker = (dateTimePicker) => {
    console.log(dateTimePicker)
    if (isAndroid) {
      setFormData({ ...formData, [dateTimePicker]: true})
    }
  }

  /**
   * 
   * @param {Date} selectedDate
   * @description Takes in a date object as an arguement and then sets to the dateOfBirth property as a string value in the formData object. It then clears the error state for any dateOfBirth errors. 
   */
  const handleDateConfirm = (selectedDate) => {
    setDate(selectedDate);
    console.log('selectedDate: ', selectedDate);
    setFormData({
      ...formData,
      date: selectedDate,
      showDatePicker: false,
    });
    clearError('date',  errors, setErrors);
  };

  /**
   * 
   * @param {Date} selectedTime
   * @description Takes in a date/time object as an arguement and then sets it to either the startTime or endTime property as a string value in the formData object. It then clears the error state for any startTime or endTime errors. 
   */
  const handleTimeConfirm = (selectedTime, type) => {
    const startOrEnd = type.includes('start') ? 'showStartTimePicker' : 'showEndTimePicker';
    setFormData({
      ...formData,
      [type]: selectedTime.toTimeString(),
      [startOrEnd]: false,
    });
    clearError(type,  errors, setErrors);
  };

  /**
   * Increase the capacity number.
   */
  const addTicket = () => {
    const updatedData = { capacity: formData.capacity += 1, ...formData };
    clearError('capacity', errors, setErrors)
    setFormData(updatedData);
  }
  
  /**
   * Decrease the capacity number.
   */
  const minusTicket = () => {
    const updatedData = { capacity: formData.capacity -= 1, ...formData };
    clearError('capacity', errors, setErrors)
    setFormData(updatedData);
  }

  /**
   * After validating, navigate back to the Admin Dashboard page.
   */
  const createEvent = () => {
    if (validateForm(formData, setErrors)) {
      navigation.navigate('AdminDashboard');
    };
  };

  useEffect(() => {}, [formData]);

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageIcon} style={{width: 50, height: 50}} />
          <Text style={{fontWeight: 'bold', fontSize: 24, color: 'white'}}>Upload</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
             Image Here
          </Text>
        </View>
        
        <View style={styles.formContainer}>
          <TextInput
            placeholder={!errors.eventTitle ? "Event Title" : errors.eventTitle}
            placeholderTextColor={!errors.eventTitle ? "lightgray" : 'red'}
            value={formData.email}
            onChangeText={text => setFormData({...formData, eventTitle: text})}
            onFocus={() => clearError('eventTitle', errors, setErrors)}
            style={!errors.eventTitle ? styles.input : styles.errorInput}
            autoFocus={false}
          />
          
          <Pressable style={styles.pressable} onPress={() => openAndroidDatePicker('showDatePicker')}>
            <TextInput
              placeholder={!errors.date ? 'Date' : errors.date}
              placeholderTextColor={!errors.date ? 'lightgray' : 'red'}
              value={formData.date}
              onFocus={() => clearError('date', errors, setErrors)}
              style={!errors.date ? styles.input : styles.errorInput}
              editable={false}
              onPressIn={() => setFormData({ ...formData, showDatePicker: true})}
              onChangeText={text => setFormData({ ...formData, date: text })}
              autoFocus={false}
            />
          </Pressable>
          {formData.showDatePicker && (
            <DateTimePicker
              mode='date'
              value={date}
              display='default'
              onChange={handleDateConfirm}
              // onCancel={() => setFormData({ ...formData, showDatePicker: false})}
            />
          )}
          <Pressable style={styles.pressable} onPress={() => openAndroidDatePicker('showStartTimePicker')}>
            <TextInput
              placeholder={!errors.startTime ? "Start Time" : errors.startTime}
              placeholderTextColor={!errors.startTime ? "lightgray" : 'red'}
              value={formData.startTime}
              editable={false}
              onChangeText={text => setFormData({ ...formData, startTime: text })}
              onPressIn={()=> setFormData({ ...formData, showStartTimePicker: true })}
              onFocus={() => clearError('startTime', errors, setErrors)}
              style={!errors.startTime ? styles.input : styles.errorInput}
              autoFocus={false}
            />
          </Pressable>
          {formData.showStartTimePicker && (
            <DateTimePicker
              mode='time'
              value={formData.startTime}
              display='default'
              onChange={(e) => {
                console.log(e)
                handleTimeConfirm(e, 'startTime')
              }}
              // onCancel={() => setFormData({ ...formData, showStartTimePicker: false })}
            />
          )}
          <Pressable style={styles.pressable} onPress={() => openAndroidDatePicker('showEndTimePicker')}>
            <TextInput
              placeholder={!errors.endTime ? "End Time" : errors.endTime}
              placeholderTextColor={!errors.endTime ? "lightgray" : 'red'}
              value={formData.endTime}
              editable={false}
              onChangeText={text => setFormData({ ...formData, endTime: text })}
              onPressOut={()=> setFormData({ ...formData, showEndTimePicker: true })}
              onFocus={() => clearError('endTime', errors, setErrors)}
              style={!errors.endTime ? styles.input : styles.errorInput}
              autoFocus={false}
            />
          </Pressable>
          {formData.showEndTimePicker && (
            <DateTimePicker
              mode='time'
              value={formData.endTime}
              display='default'
              // onConfirm={(e) => handleTimeConfirm(e, 'endTime')}
              // onCancel={() => setFormData({ ...formData, showEndTimePicker: false })}
            />
          )}
          <TextInput
            placeholder={!errors.location ? "Location" : errors.location}
            placeholderTextColor={!errors.location ? "lightgray" : 'red'}
            value={formData.location}
            onChangeText={text => setFormData({ ...formData, location: text })}
            onPressOut={()=> setFormData({ ...formData, location: '' })}
            onFocus={() => clearError('location', errors, setErrors)}
            style={!errors.location ? styles.input : styles.errorInput}
            autoFocus={false}
          />

          <View style={styles.capacityContainer}>
            <Text style={styles.capacityText}>Capacity</Text>
            <View style={styles.plusAndMinusContainer}>
              <TouchableOpacity style={styles.capacityButton} onPress={minusTicket}>
                <Text>-</Text>
              </TouchableOpacity>
                <TextInput
                  keyboardType="number-pad"
                  placeholder="0"
                  placeholderTextColor={'lightgrey'}
                  style={!errors.capacity ? styles.capacityInput : styles.capacityInputError}
                  value={formData.capacity.toString()}
                  onChangeText={text => setFormData({ ...formData, capacity: parseInt(text) })}
                  onBlur={() => setFormData({ ...formData, capacity: formData.capacity })}
                  onFocus={() => clearError('capacity', errors, setErrors)}
                  autoFocus={false}
                />
              <TouchableOpacity style={styles.capacityButton} onPress={addTicket}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TextInput
            placeholder={!errors.description ? "Description" : errors.description}
            placeholderTextColor={!errors.description ? "lightgray" : 'red'}
            value={formData.description}
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setFormData({ ...formData, description: text })}
            onPressOut={()=> setFormData({ ...formData, description: '' })}
            onFocus={() => clearError('description', errors, setErrors)}
            style={!errors.description ? styles.textArea : styles.errorTextArea}
            autoFocus={false}
          />
          
          <TouchableOpacity style={styles.primaryButton} onPress={createEvent}>
            <Text style={styles.primaryButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </KeyboardAvoidingWrapper>
  )
};

export default EventCreationScreen;