import React, {useContext} from 'react';
import { View, TextInput, Text, TouchableOpacity, Image  } from 'react-native';
import { styles } from './CreateAccountScreenCSS';
import { AuthContext } from '../../../App';
const smclogo = require('../../assets/images/smclogo.png');


const CreateAccountScreen3 = ({ navigation }) => {
  // const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={smclogo} />
      </View>
      <Text style={styles.header} >CREATE NEW ACCOUNT</Text>
      <TextInput placeholder="Email Address" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.primaryButton} onPress={() => console.log('set isAuth')}>
        <Text style={styles.primaryButtonText} >CREATE NEW ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};


export default CreateAccountScreen3;