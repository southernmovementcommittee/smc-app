import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '100%',
        maxHeight: '100%',
        backgroundColor: "#ffffff",
      },
      eventHeaderContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '100%',
        height: 428,
      },
      logoImage: {
        width: "100%",
        height: "100%",
      }, 
      eventDetailsContainer: {
        flex: 1,
        paddingLeft: 10,
      },
      eventDescription: {
        padding: 10,
      },
      ticketCount: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd'
      },
      rsvpButtonFooter: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        padding: 15,
        borderWidth: 2,
        borderColor: 'red',
        borderStyle: 'solid'
      },
      rsvpContainer: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
    },
      eventDetailsBody: {
        marginTop: SIZES.medium
      },
      fontHeader: {
        fontSize: SIZES.xxLarge,
        paddingLeft: SIZES.medium,
        fontWeight: 'bold'
        
      },
      fontText: {
        fontSize: SIZES.large,
        paddingLeft: SIZES.medium
      },
      fontTextAlt: {
        fontSize: SIZES.medium,
        paddingLeft: SIZES.medium
      }
})

export default styles