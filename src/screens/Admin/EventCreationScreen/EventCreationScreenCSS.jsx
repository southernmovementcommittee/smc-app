import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
  },
  formContainer: {
    flex: 1,
    minWidth: 300,
    marginTop: 30,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'white',
  },
  pressable: {
    alignSelf: 'stretch',
  },
  input: {
    alignSelf: 'stretch',
    padding: 10,
    marginVertical: 7,
    borderWidth: 1,
    borderColor: '#FFD600',
    borderRadius: 25,
    color: 'white',
    padding: 15,
    backgroundColor: '#000',
  },
  errorInput: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 25,
    color: 'red',
    padding: 15,
    backgroundColor: 'pink',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    alignSelf: 'stretch',
  },
  errorTextContainer: {
    maxWidth: 300,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginHorizontal: 15,
  },
  textArea: {
    alignSelf: 'stretch',
    textAlign: 'auto',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFD600',
    borderRadius: 15,
    paddingLeft: 15,
    paddingTop: 15,
    height: 200,
    backgroundColor: '#000',
    color: 'white'
  },
  errorTextArea: {
    alignSelf: 'stretch',
    textAlign: 'auto',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 15,
    paddingLeft: 15,
    paddingTop: 15,
    height: 200,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'pink',
    color: 'white'
  },
  capacityInputError: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    minWidth: 100,
    textAlign: 'center',
    backgroundColor: 'pink',
    color: 'red',
    fontWeight: 'bold',
  },
  androidTextArea: {
    alignSelf: 'stretch',
    textAlign: 'auto',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingBottom: 150,
    paddingLeft: 15,
    height: 200,
    backgroundColor: '#f5fcff',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 26,
    marginVertical: 20,
  },
  accentHeader: {
    fontWeight: 'bold',
    fontSize: 26,
    marginVertical: 20,
    color: '#FFD600'
  },
  primaryButton: {
    alignSelf: 'stretch', // Flexbox width (stretches to the parent container)
    marginTop:25,
    marginBottom: 40,
    backgroundColor: '#FFD600',
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
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer: {
    flex: 1,
    minHeight: 150,
    minWidth: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFD600',
    marginTop: 100,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'white',
  },
  arrowContainer: {
    position: 'absolute',
    right: -10,
  },
  arrow: {
    borderColor: '#FFD600',
    borderStyle: 'solid',
    borderWidth: 3,
  },
  image: {
    width: 125,
    height: 125,
  },
  capacityContainer: {
    alignSelf: 'stretch',
    marginVertical: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'white',
  },
  plusAndMinusContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },
  capacityButton: {
    minWidth: 80,
    minHeight:40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD600'
  },
  capacityInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    minWidth: 100,
    backgroundColor: '#000',
    color: 'white',
    textAlign: 'center',
  },
  capacityText: {
    color: 'lightgray',
  }
});