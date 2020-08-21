import { StyleSheet } from 'react-native';

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
        width: 200
    },
    movieGallery:
    {
        height: '50%',
        backgroundColor: '#ceddf5',
        width: '100%',
        display:"flex",
        flexDirection: 'row',
        flexWrap: 'nowrap',
    }
});

const buttons = StyleSheet.create({

});

export { styles, buttons }