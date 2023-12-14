import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#f5fcff',
    alignSelf: 'stretch',
  },
  shortInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#f5fcff',
    minHeight: 50,
    minWidth: 140,
  },
  shortInputContainer: {
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
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minWidth: 300,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    alignSelf: 'stretch'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 26,
    marginVertical: 10,
    textAlign: 'center',
    marginBottom: 20
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  primaryButton: {
    alignSelf: 'stretch', // Flexbox width (stretches to the parent container)
    marginBottom: 40,
    backgroundColor: '#000',
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
    marginTop:50,
    maxHeight: 100,
  },  
  image: {
    width: 100,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  checkbox: {
    borderColor: 'black',
    height:25,
    width:25,
  },
  checkboxContainer: {
    marginHorizontal: 20
  },
  checkboxesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginBottom: 30,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  }
});