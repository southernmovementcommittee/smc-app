import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 430,
        maxHeight: '100%',
        backgroundColor: "#ffffff",
      },
      eventHeaderContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 430,
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
      buttonFooter: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 15,
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