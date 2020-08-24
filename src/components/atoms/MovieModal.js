import React, {Component} from 'react';
import {Text, Image, View, Modal, TouchableHighlight,} from 'react-native';
import { styles, buttons } from 'styles/style';

class MovieModal extends Component {

    constructor(props) 
    {
        super(props);

        this.state = {
            modalVisible: false,
        }

    }

    render() {

      const {modalVisible, didMount} = this.state;
      
      return(
        <Modal
        animationType="slide"
        transparent={true}
        style={styles.modal}
        visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image resizeMode={'cover'} style={styles.image} 
            source={{uri:"https://image.tmdb.org/t/p/original"+this.props.url}}/>
                    <Text style={styles.header}>{this.props.title}</Text>
                    <Text style={styles.overview}>{this.props.overview}</Text>

                    <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                        this.setState({modalVisible:false})
                    }}
                    >
                        <Text style={styles.textStyle}>Hide</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
            }
}

export default MovieModal;