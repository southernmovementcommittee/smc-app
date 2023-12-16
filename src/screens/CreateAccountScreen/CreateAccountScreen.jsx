import { useState, useEffect, useRef } from 'react';

import { View, TouchableOpacity, Animated } from 'react-native';

import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { PaginationDot } from '../../components/PaginationDot';

import { styles } from './Steps/Step1CSS';

const CreateAccountScreen = ({ setIsAuth }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const animatedValues = useRef([1, 2, 3].map(() => new Animated.Value(1))).current;

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
  }, [currentStep]);

  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 goToStep2={() => goToStep(2)} />;
      case 2:
        return <Step2 goToStep3={() => goToStep(3)} />;
      case 3:
        return <Step3 setIsAuth={setIsAuth} />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      {renderStep()}
      <View style={styles.paginationContainer}>
        {[1, 2, 3].map((step, index) => (
          <TouchableOpacity key={step} onPress={() => goToStep(step)}>
            <PaginationDot animatedValues={animatedValues} index={index} selected={step === currentStep}/>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


export default CreateAccountScreen;
