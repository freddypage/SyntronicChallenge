import React, {useState, Component} from 'react';
import {Image, View, TouchableHighlight, Modal, Text} from 'react-native';
import { styles, buttons } from 'styles/style';
import Poster from 'atoms/Poster';
import MovieModal from 'atoms/MovieModal';


class ExpandablePoster extends Component {

    componentDidMount() {
        this.setState({isLoading:false});
        return
    }

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false
        }
    }

    render() {

        const {modalVisible} = this.state;

        return(
            
                <View>
                    <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        this.setState({modalVisible:true});
                    }}>
                        <Poster
                        url={this.props.url}
                        />
                    </TouchableHighlight>

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
                </View>
            
        );
    }
}

export default ExpandablePoster;