import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  header: {
    flex: 1,
    backgroundColor: '#000',
    maxHeight: 300,
    minHeight: 300,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerColumns: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBlocks: {
    flex: 1,
    maxHeight: 75,
    minWidth: 110,
    padding: 20,
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerNumbers: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonContainer: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#000',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFD600',
    fontSize: 26,
    fontWeight: 'bold',
  }
});