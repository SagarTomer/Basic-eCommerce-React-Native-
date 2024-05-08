
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
         backgroundColor: "#1E2029",
        
        padding: 20
    }
    ,
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#fffFFF',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 5,
        // backgroundColor:"grey"
    },

    productListText: {
        color: "white", 
        fontSize: 30, marginBottom: 5,
        alignSelf:"center",
        // backgroundColor:"white"
    },

    TextInputStyle: {
        backgroundColor: "white", marginBottom: 10, borderRadius: 20,
        textAlign:"center"
    },
    imageContainer: {
        padding: 10,
        backgroundColor: "grey",
        borderRadius: 10
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    detailsContainer: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor:"#E3E3E3"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    brand: {
        fontSize: 16,
        marginBottom: 5,
        color: '#888',
    },
    discount: {
        fontSize: 16,
        marginBottom: 5,
        color: 'green',
    },
    description: {
        fontSize: 14,
        color: '#333',
    },

    discounterProductsView: {
        // justifyContent:"center",
        // alignContent:"center",
        // textAlign:"center"
    }
    ,
    discounterProducts: {
        color: "white",
        fontSize: 30,
        // textAlign:"center",
        alignSelf: "center",
        position: "relative",
        top: 20

    },
    footerButton: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 5,
        marginBottom: "30%",
        marginVertical: "5%"
    },
    Skip: {
        backgroundColor: "white",
        marginTop: 10,
        textAlign: "center",
        width: "50%",
        alignSelf: "center",
        borderRadius: 20,
        marginBottom: 10
        //    borderWidth:2,
        //    borderColor:"white"

    },
    skipView: {
        backgroundColor: "black"
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: "center"
    },
    footerLoaderContainer: {
        alignItems: 'center',
        marginVertical: 10,
        marginBottom: "10%"
    },
    sectionHeader: {
        backgroundColor: '#1E2029', 
        padding: 10,
      },
      sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold', 
        alignSelf:"center",
        color:"white"
      },
});