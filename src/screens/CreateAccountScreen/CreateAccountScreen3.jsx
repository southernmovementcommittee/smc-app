import React, {useState} from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Pressable } from 'react-native';
// import DatePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from './CreateAccountScreen3CSS';
const smclogo = require('../../assets/images/smclogo.png');

const CreateAccountScreen3 = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = ({ type }, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate || dateOfBirth;
      setDate(currentDate);
      setShowDatePicker(Platform.OS === 'ios');
    } else {
      toggleDatePicker();
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  }

  return (
    <View style={styles.container}>
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
        <TextInput placeholder="OCCUPATION" style={styles.input} />
        {!showDatePicker && (
          <Pressable onPress={()=> toggleDatePicker}>
          <TextInput
            placeholder="DATE OF BIRTH"
            style={styles.input} 
            editable={false}  
          />
        </Pressable>
        )}
        {showDatePicker && (
        <DateTimePicker
            date={date}
            display="spinner"
            mode="date"
            value={date}
            onChange={onChange}
          // style={styles.input}
          placeholder="DATE OF BIRTH"
          format="MM-DD-YYYY"
          minDate="2016-05-01"
          maxDate="2022-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => onDateChange(date)}
      />
      )}
        <TextInput
          placeholder="BIO"
          multiline={true}
          numberOfLines={4}
          style={styles.textArea} />
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Step2')}>
          <Text style={styles.primaryButtonText} >CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default CreateAccountScreen3;