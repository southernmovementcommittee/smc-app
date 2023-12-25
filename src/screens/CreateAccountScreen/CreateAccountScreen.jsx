import { useState, useEffect, useRef } from 'react';

import { View, Animated, Platform, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView } from 'react-native';

import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { PaginationDot } from '../../components/PaginationDot';

import { styles } from './Steps/Step1CSS';

const CreateAccountScreen = ({ setIsAuth, setUser }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNum: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    selectedOption: false,
    showDatePicker: false,
    occupation: '',
    dateOfBirth: '',
    bio: '',
    image: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    phoneNum: '',
    city: '',
    state: '',
    zipCode: '',
    selectedOption: '',
    showDatePicker: false,
    occupation: '',
    dateOfBirth: '',
    bio: '',
    image: ''
  });
  const animatedValues = useRef([1, 2, 3].map(() => new Animated.Value(1))).current;
  const isAndroid = Platform.OS === 'android';

  /**
   * After ensure there are no errors in the form, the user object is created from the collected formData. 
   */
  const createUserObj = () => {
    // Checks if there are any errors
    if (!Object.entries(errors).length) {
      setUser({... formData});
      setIsAuth(true);
    }
  }

const validateForm = (step) => {
    let valid = true;
    let newErrors = {};

  if (step === 1) {
    // Email
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'invalid';
      valid = false;
    }
  
    // Password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'lengthError';
      valid = false;
    }
  
    // Confirm Pasword
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmation is required';
      valid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'noMatch';
      valid = false;
    }
  }

  if (step === 2) { 
    // First Name
    if (!formData.firstName) {
        newErrors.firstName = 'Name is required';
        valid = false;
    }
    
    // Last Name
    if (!formData.lastName) {
        newErrors.lastName = 'Name is required';
        valid = false;
    }
    
    // Phone Number
    if (!formData.phoneNum) {
      newErrors.phoneNum = 'Phone number is required';
      valid = false;
    } else {
      const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      if (!phoneRegex.test(formData.phoneNum)) {
        newErrors.phoneNum = 'invalid'
        valid = false;
      }
    }

    // Address
    if (!formData.address) {
      newErrors.address = 'Address is required';
      valid = false;
    }
    
    // City
    if (!formData.city) {
      newErrors.city = 'City is required';
      valid = false;
    }

    // State
    if (!formData.state) {
      newErrors.state = 'State is required';
      valid = false;
    }

    // Zip Code
    if (!formData.zipCode) {
      newErrors.zipCode = 'Zip is required';
      valid = false;
    } else {
      const zipCodeRegex = /^\d{5}(-\d{4})?$/;
      if (!zipCodeRegex.test(formData.zipCode)) {
        newErrors.zipCode = 'invalid';
        valid = false;
      }
    }

    // Selected Option (Are you Black?)
    if (!formData.selectedOption) {
      newErrors.selectedOption = 'Choice is required';
      valid = false;
    }
  }

  if (step === 3) {
    // Occupation
    if (!formData.occupation) {
      newErrors.occupation = 'Occupation is required';
      valid = false;
    }

    // Date of Birth
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
      valid = false;
    }
  }

    setErrors(newErrors);
    return valid;
  }

/**
   * 
   * @param {string} inputName
   * @description Clears the errors for whatever input name is passed in.
   */
  const clearError = (inputName) => {
    let currentErrors = {...errors};
    
    if (inputName === 'email') {
      // deletes email from the shallow copy of state (currentErrors)
      const { email, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'password') {
      // deletes password from the shallow copy of state (currentErrors)
      const { password, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'confirmPassword') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { confirmPassword, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'firstName') {
      // deletes email from the shallow copy of state (currentErrors)
      const { firstName, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'lastName') {
      // deletes password from the shallow copy of state (currentErrors)
      const { lastName, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'phoneNum') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { phoneNum, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'address') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { address, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'address2') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { address2, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'city') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { city, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'state') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { state, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'zipCode') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { zipCode, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'selectedOption') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { selectedOption, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'occupation') {
      // deletes email from the shallow copy of state (currentErrors)
      const { occupation, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'dateOfBirth') {
      // deletes password from the shallow copy of state (currentErrors)
      const { dateOfBirth, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'bio') {
      // deletes password from the shallow copy of state (currentErrors)
      const { bio, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
  }

  useEffect(() => {
    // Animated.timing(animatedValues[currentStep - 1], {
    //   toValue: 1.5, // Scale up the dot for the current step
    //   duration: 200,
    //   useNativeDriver: true,
    // }).start();

    // // Scale down the previous step's dot
    // if (currentStep > 1) {
    //   Animated.timing(animatedValues[currentStep - 2], {
    //     toValue: 1,
    //     duration: 200,
    //     useNativeDriver: true,
    //   }).start();
    // }
  }, [currentStep, formData]);

  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1
          validateForm={validateForm}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          clearError={clearError}
          goToStep2={() => goToStep(2)}
        />;
      case 2:
        return <Step2
          validateForm={validateForm}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          clearError={clearError}
          goToStep3={() => goToStep(3)}
        />;
      case 3:
        return <Step3
          validateForm={validateForm}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          clearError={clearError}
          setIsAuth={setIsAuth}
          createUserObj={createUserObj}
        />;
      default:
        return null;
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {/* This component keeps the keyboard from obscuring the view of inputs. */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.container}>
          {renderStep()}
          <View style={isAndroid ? styles.androidPaginationContainer : styles.paginationContainer}>
            {[1, 2, 3].map((step, index) => (
              <PaginationDot key={step} animatedValues={animatedValues} index={index} selected={step === currentStep}/>
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};


export default CreateAccountScreen;
