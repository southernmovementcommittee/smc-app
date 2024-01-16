import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  textContainer: {
    paddingHorizontal: 40,
  },
  text: {
    fontWeight: 'bold',
  },
  primaryButton: {
    alignSelf: 'stretch', // Flexbox width (stretches to the parent container)
    marginHorizontal: 40, // To prevent stretching to the very edges
    marginVertical: 5,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  secondaryButton: {
    alignSelf: 'stretch', // Flexbox width (stretches to the parent container)
    marginHorizontal: 40, // To prevent stretching to the very edges
    marginVertical: 5,
    backgroundColor: '#FFD600',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFD600',
    fontSize: 18,
    fontWeight: 'bold'
  },
  secondaryButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  overlayText: {
    color: '#FFD600',
    fontSize: 24,
    margin: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    position: 'relative',
    opacity: 0.5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  yellowCard: {
    backgroundColor:'#FFD600',
    width: 400,
    height: 400,
    justifyContent: 'center',
    marginBottom: 30,
    padding: 10,
  },
  topNav: {
    backgroundColor: '#FFD600',
    width: 400,
    height: 40,
  },
  yellowCardText: {
    color:'#000',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30,
    lineHeight: 60,
    },
    yellowCardSublineText: {
      color:'#000',
      fontSize: 12,
      fontWeight: 'bold',
      marginLeft: 30,
      marginRight: 20,
    }
});
