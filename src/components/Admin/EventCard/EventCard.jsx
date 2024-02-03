import { View, Text, Image } from 'react-native';
import { styles } from './EventCardCSS';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const protesterImg = require('../../../assets/images/protesters.jpg')

const EventCard = () => {
  return (
  <View style={styles.container}>
    <View style={styles.eventHeader}>
      <Text style={styles.eventTitle}>Nashville Unity Walk</Text>
    </View>
      <Image source={protesterImg} style={styles.image} />
      <View style={styles.eventFooter}>
        <View style={styles.iconBlocks}>
          <FontAwesomeIcon name='user' size={25} color='#FFD600' />  
          <Text style={styles.iconTexts}>35</Text>
        </View>
        <View style={styles.iconMoneyBlock}>
          <FontAwesomeIcon name='money' size={25} color='#FFD600' />  
          <Text style={styles.iconTexts}>$525</Text>
        </View>
        <FontAwesomeIcon name='edit' size={25} color='#FFD600' />  
    </View>
  </View>
  )
};

export default EventCard;