import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    paddingHorizontal: 20,
  },
  scollContainer: {
    overflow: 'scroll',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minWidth: 300,
    maxHeight: 475,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },
  pressable: {
    alignSelf: 'stretch',
  },
  input: {
    alignSelf: 'stretch',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#f5fcff',
  },
  inputHidden: {
    display: 'none',
  },
  errorInput: {
    margin: 10,
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
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingLeft: 15,
    paddingTop: 15,
    height: 200,
    backgroundColor: '#f5fcff',
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
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer: {
    flex: 1,
    maxHeight: 150,
    minWidth: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#FFD600',
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
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
    // flexDirection: 'column',
    // justifyContent: 'flex-start'
  },
});