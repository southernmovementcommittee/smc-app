import { useState, useEffect, useRef } from 'react';

import { View, Animated, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Text } from 'react-native';

import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { PaginationDot } from '../../components/PaginationDot';
import { createAccountFormInputs } from '../../constants/createAccountFormInputs';
import { validateForm, clearError } from '../../helpers/CreateAccount/helpers';

import { styles } from './Steps/Step1CSS';

const CreateAccountScreen = ({ setIsAuth, setUser }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(createAccountFormInputs);
  const [errors, setErrors] = useState(createAccountFormInputs);
  const animatedValues = useRef([1, 2, 3].map(() => new Animated.Value(1))).current;
  const isAndroid = Platform.OS === 'android';

  /**
   * After ensuring there are no errors in the form, the user object is created from the collected formData. 
   */
  const createUserObj = () => {
    // Checks if there are any errors
    if (!Object.entries(errors).length) {
      setUser({... formData});
      setIsAuth(true);
    }
  }

  useEffect(() => {}, [currentStep, formData]);

  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  /**
   * @returns React Component (Step of the Create Accounts Flow)
   * @description Depending on what step of the create accounts flow the user is on, this function will return the corresponding step respectively.
   */
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1
          validateForm={() => validateForm(1, formData, setErrors)}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          clearError={clearError}
          goToStep2={() => goToStep(2)}
        />;
      case 2:
        return <Step2
          validateForm={() => validateForm(2, formData, setErrors)}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          clearError={clearError}
          goToStep3={() => goToStep(3)}
        />;
      case 3:
        return <Step3
          validateForm={() => validateForm(3, formData, setErrors)}
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
      <View style={styles.container}>
          {renderStep()}
          <View style={isAndroid ? styles.androidPaginationContainer : styles.paginationContainer}>
            {[1, 2, 3].map((step, index) => (
              <PaginationDot key={step} animatedValues={animatedValues} index={index} selected={step === currentStep}/>
            ))}
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
};


export default CreateAccountScreen;
