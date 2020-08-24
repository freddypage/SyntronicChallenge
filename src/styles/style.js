import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        width:'40%'
    },
    centered: {
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontFamily: 'Roboto',
        fontSize: 20,
    },
    image: {
        width:135, 
        height:200
    },
    movieFrame: {
        width:(Dimensions.get('window').width / 2) - 20,
        margin:10
    },
    movieGallery:
    {
        width: '100%',
        display:"flex",
        flexDirection: 'row',
        flex:4,
        justifyContent: "space-between",
        alignItems: "center"
    },
    appTitle: {
        fontFamily: 'Roboto',
        fontSize: 30,
        padding: 40
    },
    mainApp: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display:"flex"
    },
    mainHeader: {
        flex:1,
        alignItems:"center",
        textAlign: "center"
    },
    searchBar: {
        flex:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    searchText: {
        fontFamily: "Roboto",
        fontSize:20,
        margin:20,
        padding:10,
        flex:2,
        backgroundColor: "#d8e0e3"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0, 0, 0, 0.7)'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily:"Roboto",
        fontSize:15,
        paddingLeft:15,
        paddingRight:15
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      titleCard: {
          marginTop: 10,
      },
      selectionTab: {
          textAlign: "left",
          flex: 1,
          display: "flex",
          justifyContent: "flex-start",

      },
      modal: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
      },
      overview: {
          fontFamily:"Roboto",
          fontSize:15,
          padding:5
      }
});

const buttons = StyleSheet.create({
    searchButton: {
        flex: 1,  
        padding:20,
        fontSize:20
    },
});

export { styles, buttons }