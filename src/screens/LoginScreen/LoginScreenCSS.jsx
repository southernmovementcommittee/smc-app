import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 15,
  },

  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25
  },

  primaryButton: {
    alignSelf: 'stretch', // Flexbox width (stretches to the parent container)
    marginHorizontal: 40, // To prevent stretching to the very edges
    marginVertical: 5,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    borderColor: '#FFD600',
    borderWidth: 2,
  },
  primaryButtonText: {
    color: '#FFD600',
    fontSize: 18,
    fontWeight: 'bold'
  },

  imageContainer: {
    flex: 1,
    paddingTop: 20,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },  
  image: {
    width: 250,
    height: 250,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

});