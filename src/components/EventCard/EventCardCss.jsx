import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 430,
        height: 200,
        backgroundColor: "#ffffff",
        flexDirection: 'row'
      },
      logoContainer:{
        flex: 1,
        width: 170,
        height: 200,
        backgroundColor: "#FFD600",
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
        backgroundColor: "grey"
      }
})

export default styles