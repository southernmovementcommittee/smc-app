import { useState, useEffect, useRef } from 'react';

import { View, Animated, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { PaginationDot } from '../../components/PaginationDot';

import { styles } from './Steps/Step1CSS';

const CreateAccountScreen = ({ setIsAuth, setUser }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});
  const animatedValues = useRef([1, 2, 3].map(() => new Animated.Value(1))).current;
  const isAndroid = Platform.OS === 'android';

  const updateUserObj = (newData) => {
    setUserData(prev => Object.assign(prev, newData));
    // checks the user property length before authenticating
    if (Object.entries(userData).length === 14) {
      setUser(userData);
      setIsAuth(true);
    }
  }

  useEffect(() => {
    Animated.timing(animatedValues[currentStep - 1], {
      toValue: 1.5, // Scale up the dot for the current step
      duration: 200,
      useNativeDriver: true,
    }).start();

    // Scale down the previous step's dot
    if (currentStep > 1) {
      Animated.timing(animatedValues[currentStep - 2], {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
    console.log('userData: ', userData);
  }, [currentStep, userData]);

  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 goToStep2={() => goToStep(2)} updateUserObj={updateUserObj} />;
      case 2:
        return <Step2 goToStep3={() => goToStep(3)} updateUserObj={updateUserObj} />;
      case 3:
        return <Step3 setIsAuth={setIsAuth} updateUserObj={updateUserObj} />;
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
