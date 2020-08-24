import React, {useState, Component} from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
import { styles, buttons } from 'styles/style';


class Poster extends Component {

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

        const {isLoading, modalVisible} = this.state;

        return(
            
                <View style={styles.centered}>
                    {isLoading ? <ActivityIndicator/> :                
                    (
                        <Image resizeMode={'cover'} style={styles.image} 
                        source={{uri:"https://image.tmdb.org/t/p/original"+this.props.url}}
                        />                
                    )}               
                </View> 
        );
    }
}

export default Poster;