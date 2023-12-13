import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 430,
        height: 200,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: 'yellow'
      },
      logoContainer:{
        flex: 1,
        width: 170,
        height: 200,
        backgroundColor: "#000000",
        // borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },
      logoImage: {
        width: "100%",
        height: "100%",
      }, 
      eventDetailsContainer: {
        flex: 2,
        width: 260,
        height: 200,
        backgroundColor: "#FFFFFF"
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