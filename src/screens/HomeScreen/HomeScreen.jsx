import React from 'react';
import { View, Text, TouchableOpacity, Image,Linking } from 'react-native';
import { styles } from './HomeScreenCSS';
import { ScrollView } from 'react-native-gesture-handler';

const sobtown = require('../../assets/images/sobtown.png');
const BNA_eventsphoto = require('../../assets/images/BNA_eventsphoto.jpg');
const smclogo = require('../../assets/images/smclogo.png')
// const smcLink = () => {
//   const link ='https://www.oursmc.org/ ';
//   Linking.openURL(link);
// }

const HomeScreen = ({ user, setIsAuth }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topNav}>
          <Image source={smclogo} style={styles.logo} />
          </View>
      
      {/*image with text overlay*/}

        <View style={styles.imageContainer}>
        <Image source={sobtown} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>CURRENT</Text>
          <Text style={styles.overlayText}>EVENT</Text>
        </View>
        </View>

        <Text style={styles.text}>Home Screen</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Newly Created User</Text>
          <Text style={styles.text}>{JSON.stringify(user, null, 2)}</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => setIsAuth(false)}>
          <Text style={styles.primaryButtonText}>REGISTER TO EVENT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={() => setIsAuth(false)}>
          <Text style={styles.primaryButtonText}>Reset Authentication</Text>
        </TouchableOpacity>
        <View style={styles.yellowCard}>
          <Text style={styles.yellowCardText}>Southern</Text>
          <Text style={styles.yellowCardText}>Movement</Text>
          <Text style={styles.yellowCardText}>Committee</Text>

          <Text style={styles.yellowCardSublineText}>We are Black organizers, artists, creatives, and movement lawyers
            working with community members to implement transformative programs and policies developed by people directly impacted by incarceration, police violence, racism, and economic inequality. Our campaigns and projects build safe and just communities grounded in transformative justice, participatory democracy, and visionary leadership.</Text>
          
          {/* <TouchableOpacity style={styles.primaryButton} onPress={smcLink}>
            <Text style={styles.primaryButtonText}>GET TO KNOW US</Text>
          </TouchableOpacity> */}
        </View>
        </View>
        <View style={styles.container}>
        <Image source={BNA_eventsphoto} style={styles.image} />
        <View style={styles.overlay}>
      </View>
      </View>
    </ScrollView>
  );
  };



export default HomeScreen;
