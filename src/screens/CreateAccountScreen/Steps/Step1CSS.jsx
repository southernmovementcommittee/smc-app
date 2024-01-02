import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    overflow: 'scroll',
    height: 'auto',
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#f5fcff',
    justifyContent: 'center',
  },
  errorInput: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 25,
    color: 'red',
    padding: 15,
    backgroundColor: 'pink',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  errorTextContainer: {
    maxWidth: 300,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginHorizontal: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 20,
  },
  primaryButton: {
    alignSelf: 'stretch', // Flexbox width (stretches to the parent container)
    marginTop:25,
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
    maxHeight: 300,
    overflow: 'hidden',
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },  
  inputFocusedImageContainer: {
    flex: 1,
    top: 60,
    height: 'auto',
    overflow: 'hidden',
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },  
  image: {
    width: 300,
    height: 300,
  },
  inputFocusedImage: {
    width: 100,
    height: 100,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    minHeight: 120,
    maxHeight: 400,
    height: 'auto',
    minWidth: 300,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },  
  paginationContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    maxHeight: 200,
    top: 720,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },
  androidPaginationContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    maxHeight: 200,
    top: 810,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },
});