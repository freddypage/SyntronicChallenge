import React, {useState, Component} from 'react';
import {Image, Text, TextInput, View, ActivityIndicator} from 'react-native';
import { styles, buttons } from 'styles/style';


class Poster extends Component {

    componentDidMount() {
        this.setState({isLoading:false});
        return
    }

    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    render() {
        const {isLoading} = this.state;
        return(
            <View style={styles.centered}>
                {isLoading ? <ActivityIndicator/> : 
            (<Image resizeMode={'cover'} style={styles.image} 
                source={{uri:"https://image.tmdb.org/t/p/original"+this.props.url}}
                />
            )}
            </View>
        );
    }
}

export default Poster;