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
        fontFamily: 'OpenSans-Regular',
        fontSize: 20,
        textAlign:"center"
    },
    botGutter: {
        marginBottom: 10
    },
    image: {
        width:135, 
        height:200,
        borderRadius: 20
    },
    movieFrame: {
        width:150,
        alignItems:"center",
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },
    movieGallery:
    {
        width: '100%',
        display:"flex",
        flexDirection: 'row',
        flex:3,
        justifyContent: "space-between",
        alignItems: "center",
    },
    appTitle: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 30,
        padding: 40
    },
    mainApp: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display:"flex",
        height:600,
        overflow:"scroll"
    },
    mainHeader: {
        flex:1,
        alignItems:"center",
        textAlign: "center",
        paddingTop:10
    },
    searchText: {
        fontFamily: "OpenSans-Regular",
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
        backgroundColor:'rgba(0, 0, 0, 0.7)',
        minHeight:Dimensions.get('window').height
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
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        width:145
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily:"OpenSans-Regular",
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
          textAlign: "center",
          flex: 1,
          display: "flex",
          justifyContent: "center",

      },
      modal: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          minHeight: Dimensions.get('window').height
      },
      overview: {
          fontFamily:"OpenSans-Regular",
          fontSize:15,
          padding:5,
          textAlign:"left"
      },
      hyperlink: {
          color:'#6adef7'
      },
      smallText: {
          fontSize:13
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