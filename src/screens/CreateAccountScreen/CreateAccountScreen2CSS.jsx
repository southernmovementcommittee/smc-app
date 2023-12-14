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
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#f5fcff',
    alignSelf: 'stretch',
  },
  shortInput: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#f5fcff',
    flex: 1,
    minHeight: 50
  },
  shortInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 26,
    marginVertical: 20,
  },
  primaryButton: {
    alignSelf: 'stretch', // Flexbox width (stretches to the parent container)
    marginHorizontal: 40, // To prevent stretching to the very edges
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
    paddingTop: 20,
    marginBottom: 80,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'black',
  },  
  image: {
    width: 75,
    height: 75,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
});