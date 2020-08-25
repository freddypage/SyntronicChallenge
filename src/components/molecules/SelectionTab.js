import React, {Component} from 'react';
import {Image, View, ActivityIndicator, TouchableHighlight, Pressable, Text, Linking} from 'react-native';
import { styles, buttons } from 'styles/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalSelector from 'react-native-modal-selector';


class SelectionTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal:false,
            selected:'Trending',
            url:'https://developers.themoviedb.org/3/trending/get-trending'
        }
    }

    

    render() {
        const {showModal, selected, overview, url} = this.state;
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Search Options' },
            { key: index++, label: 'Trending', url: "https://developers.themoviedb.org/3/trending/get-trending" },
            { key: index++, label: 'Popular', url: "https://developers.themoviedb.org/3/movies/get-popular-movies"},
            { key: index++, label: 'Now Playing', url: "https://developers.themoviedb.org/3/movies/get-now-playing"},
        ];
        return(
            <View style={styles.selectionTab}>
                

                <ModalSelector 
                data={data}
                onChange={(option)=>{ this.setState({selected:option.label, url:option.url})}}
                backdropPressToClose={true}
                visible={this.state.showModal}>
                    <TouchableOpacity onPress={ () => {
                            this.setState({showModal:true});
                        }
                    }>
                        <Text style={[styles.header, styles.botGutter]}>{this.state.selected} ▼</Text>
                    </TouchableOpacity>
                </ModalSelector>

                <Text style={[styles.overview, styles.botGutter]}>Results retrieved from this API</Text>

                <Text 
            style={styles.overview} 
            onPress={() => Linking.openURL(this.state.url)}>
                    {this.state.url}</Text>
            </View>

            
        );
    }
}

export default SelectionTab;