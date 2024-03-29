import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    paddingHorizontal: 20,
  },
  input2: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#f5fcff',
    alignSelf: 'stretch',
  },
  shortInput2: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#f5fcff',
    minHeight: 50,
    maxHeight: 50,
    minWidth: 130,
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
  shortErrorInput2: {
    borderWidth: 1,
    borderColor: 'red',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
    borderRadius: 25,
    padding: 15,
    backgroundColor: 'pink',
    minHeight: 50,
    maxHeight: 50,
    minWidth: 130,
  },
  shortInputContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 50,
    marginBottom: 10,
    alignSelf: 'stretch',
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },
  formContainer2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    minWidth: 300,
    // maxHeight: 620,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },
  emptyContainer: {
    minWidth: 300,
  },
  inputHidden: {
    display: 'none',
  },
  text2: {
    fontSize: 22,
    textAlign: 'center',
  },
  textContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    alignSelf: 'stretch'
  },
  header2: {
    fontWeight: 'bold',
    fontSize: 26,
    marginVertical: 10,
    textAlign: 'center',
    marginBottom: 20
  },
  headerContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  primaryButton2: {
    alignSelf: 'stretch', // Flexbox width (stretches to the parent container)
    marginBottom: 40,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  primaryButtonText2: {
    color: '#FFD600',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButtonText2: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer2: {
    flex: 1,
    maxHeight: 100,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
    // marginTop: 40
  },  
  image2: {
    width: 100,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  checkbox2: {
    borderColor: 'black',
    height:25,
    width:25,
  },
  checkboxContainer2: {
    marginHorizontal: 20,
  },
  checkboxesContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginBottom: 10,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },
  checkboxesAndErrorContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginBottom: 20,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },
  firstNameContainer: {
    maxWidth: 130,
  },
  lastNameContainer: {
    maxWidth: 130,
  },
  errorTextContainer: {
    maxWidth: 300,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginHorizontal: 15,
  },
});