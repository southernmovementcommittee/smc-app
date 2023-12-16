import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './Step1CSS';

const smclogo = require('../../../assets/images/smclogo.png');

export const Step1 = ({goToStep2}) => {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={smclogo} />
      </View>
      <Text style={styles.header} >CREATE NEW ACCOUNT</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#808080"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#808080"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password" placeholderTextColor="#808080" secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.primaryButton} onPress={() => goToStep2()}>
          <Text style={styles.primaryButtonText} >Continue to Step 2</Text>
        </TouchableOpacity>
      </View>
    </>
  )
};