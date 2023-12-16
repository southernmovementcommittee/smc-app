import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#f5fcff',
    justifyContent: 'center'
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
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },  
  image: {
    width: 300,
    height: 300,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    maxHeight: 420,
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
    top: 780,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },
});