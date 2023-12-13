import React, {useState} from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Button } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './CreateAccountScreen3CSS';
const smclogo = require('../../assets/images/smclogo.png');

const CreateAccountScreen3 = ({ navigation }) => {
  // const [date, setDate] = useState(new Date());

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.imageContainer}>
  //       <Image style={styles.image} source={smclogo} />
  //     </View>
  //     <Text style={styles.header} >Upload your image here</Text>
  //     <TextInput placeholder="OCCUPATION" style={styles.input} />
  //     <DatePicker
  //       date={date}
  //       mode="date"
  //       style={styles.input}
  //       placeholder="DATE OF BIRTH"v
  //       format="MM-DD=YYYY"
  //       minDate="2016-05-01"
  //       maxDate="2022-06-01"
  //       confirmBtnText="Confirm"
  //       cancelBtnText="Cancel"
  //       onDateChange={(date) => setDate(date)}
  //   />
  //     {/* <TextInput placeholder="DATE OF BIRTH" dataDetectorTypes={'calendarEvent'} style={styles.input} /> */}
  //     <TextInput
  //       placeholder="BIO"
  //       multiline={true}
  //       numberOfLines={4}
  //       style={styles.textArea} />
  //     <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Step2')}>
  //       <Text style={styles.primaryButtonText} >CREATE ACCOUNT</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
};


export default CreateAccountScreen3;