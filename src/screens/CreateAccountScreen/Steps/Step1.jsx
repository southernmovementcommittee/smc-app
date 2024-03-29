import { View, TextInput, Text, TouchableOpacity, Image, KeyboardAvoidingView  } from 'react-native';

import { styles } from './Step1CSS';

const smclogo = require('../../../assets/images/smclogo.png');

export const Step1 = ({
  validateForm,
  formData,
  setFormData,
  errors,
  setErrors,
  clearError,
  goToStep2,
}) => {

  /**
   * @description Checks that inputs are valid and if they are the it stores the current user data (email and password) into the user state object
   * and then navigates to step 2 of the flow. 
   */
  const storeUserDataAndContinue = () => {
    if (validateForm(1)) {
      goToStep2();
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={smclogo} />
      </View>
      <Text style={styles.header} >CREATE NEW ACCOUNT</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder={!errors.email ? "Email Address" : errors.email}
          placeholderTextColor={!errors.email ? "#808080" : 'red'}
          value={formData.email}
          onChangeText={text => setFormData({...formData, email: text})}
          onFocus={() => clearError('email', errors, setErrors)}
          style={!errors.email ? styles.input : styles.errorInput}
        />
        {
          errors.email === 'invalid' &&
          <View>
            <Text style={styles.errorText}>Email invalid</Text>
            <Text style={styles.errorText}>Ex: example@email.com</Text>
          </View>
        }
        <TextInput
          placeholder={!errors.password ? 'Password' : errors.password}
          placeholderTextColor={!errors.password ? "#808080" : 'red'}
          secureTextEntry
          value={formData.password}
          onChangeText={text => setFormData({ ...formData, password: text })}
          onPressIn={()=> setFormData({ ...formData, password: '', confirmPassword: '' })}
          onFocus={() => clearError('password', errors, setErrors)}
          style={!errors.password ? styles.input : styles.errorInput}
        />
        {
          errors.password === 'lengthError' &&
          <View style={styles.errorTextContainer}>
            <Text style={styles.errorText} numberOfLines={2} ellipsizeMode='middle'>
              Password needs to be at least 8 characters long.
            </Text>
          </View>
        }
        <TextInput
          placeholder={'Confirm Password'}
          placeholderTextColor={!errors.password ? "#808080" : 'red'}
          secureTextEntry
          value={formData.confirmPassword}
          onChangeText={text => setFormData({ ...formData, confirmPassword: text })}
          onPressIn={()=> setFormData({ ...formData, confirmPassword: '' })}
          onFocus={() => clearError('confirmPassword', errors, setErrors)}
          style={!errors.password ? styles.input : styles.errorInput}
        />
        {
          errors.confirmPassword === 'noMatch' &&
          <View style={styles.errorTextContainer}>
            <Text style={styles.errorText} numberOfLines={2} ellipsizeMode='middle'>
              Passwords don't match.
            </Text>
          </View>
        }
        <TouchableOpacity style={styles.primaryButton} onPress={storeUserDataAndContinue}>
          <Text style={styles.primaryButtonText} >Continue to Step 2</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
};