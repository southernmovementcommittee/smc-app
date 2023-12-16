import React, { useState } from 'react';
import { View } from 'react-native';
import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { styles } from './Steps/Step1CSS';

const CreateAccountScreen = ({ setIsAuth }) => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const goToStep2 = () => {
    setStep1(false);
    setStep3(false);
    setStep2(true);
  };

  const goToStep3 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(true);
  };

  return (
    <View style={styles.container}>
      {
        step1 ?
        (<Step1 goToStep2={goToStep2} />) :
          step2 ?
            (<Step2 goToStep3={goToStep3} />) :
            step3 ?
              (<Step3 setIsAuth={setIsAuth} />) : null
      }
    </View>
  );
};


export default CreateAccountScreen;