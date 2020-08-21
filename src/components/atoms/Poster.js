import React, {useState, Component} from 'react';
import {Image, Text, TextInput, View, ActivityIndicator} from 'react-native';


class Poster extends Component {

    getPoster(url_path)
    {
        // fetch(url_path).then((response) => {
            
        //     //console.log(response);
        //     this.setState({poster:response});
        // })
        // .catch((error) => console.log(error))
        // .finally(() => {
        //     this.setState({isLoading: false});
        // })

        // this.setState({isLoading:false});
        // return;
    }

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
            <View style={{width:200, height:200}}>
                {isLoading ? <ActivityIndicator/> : 
            (<Image resizeMode={'cover'} style={{width:177, height:200, resizeMode: 'stretch'}} 
                source={{uri:"https://image.tmdb.org/t/p/original"+this.props.url}}
                />
            )}
            </View>
        );
    }
}

export default Poster;