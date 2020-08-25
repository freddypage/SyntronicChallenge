import React, {useState, Component} from 'react';
import {Image, View, TouchableHighlight, Modal, Text} from 'react-native';
import { styles, buttons } from 'styles/style';
import Poster from 'atoms/Poster';
import { ScrollView } from 'react-native-gesture-handler';


class ExpandablePoster extends Component {

    componentDidMount() {
        this.setState({isLoading:false});
        this.getStars();
        return
    }

    getStars(){
        var str = "";
        var i=0;
        for(i; i<Math.floor(this.props.vote_average/2); i++)
        {
            str+='★';
        }
        for(i; i<5; i++)
        {
            str+='☆';
        }
        this.setState({stars:str});
        return str;
    }

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            vote_average:0,
            stars:""
        }
    }

    render() {

        const {modalVisible, stars, vote_average} = this.state;

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
                        <ScrollView>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Image resizeMode={'cover'} style={[styles.image, styles.botGutter]} 
                            source={{uri:"https://image.tmdb.org/t/p/original"+this.props.url}}/>
                                    <Text style={[styles.header,styles.botGutter]}>{this.props.title}</Text>
                                    <Text style={[styles.overview]}>{this.state.stars}</Text>
                                    <Text style={styles.botGutter}>{this.props.vote_average}</Text>
                                    <Text style={[styles.overview, styles.botGutter]}>{this.props.overview}</Text>
                                    <Text style={[styles.overview, styles.botGutter, styles.smallText]}>Released: {this.props.release_date}</Text>

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
                        </ScrollView>
                    </Modal>
                </View>
            
        );
    }
}

export default ExpandablePoster;