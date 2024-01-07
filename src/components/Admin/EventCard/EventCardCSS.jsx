import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  // scrollContainer: {
  //   flex: 1,
  // },
  eventHeader: {
    height: 50,
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventFooter: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#000',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  image: {
    height: 250,
    width: 400,
  },
  iconBlocks: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 50,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'white',
  },
  iconMoneyBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 85,
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: 'white',
  },
  iconTexts: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
});