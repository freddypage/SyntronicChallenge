import React, {Component} from 'react';
import {Image, View, ActivityIndicator, TouchableHighlight, Pressable, Text} from 'react-native';
import { styles, buttons } from 'styles/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalSelector from 'react-native-modal-selector';


class SelectionTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal:false,
            selected:'Trending'
        }
    }

    

    render() {
        const {showModal, selected} = this.state;
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Search Options' },
            { key: index++, label: 'Trending' },
            { key: index++, label: 'Popular' },
            { key: index++, label: 'Now Playing'},
        ];
        return(
            <View style={styles.selectionTab}>
                

                <ModalSelector 
                data={data}
                onChange={(option)=>{ this.setState({selected:option.label})}}
                backdropPressToClose={true}
                visible={this.state.showModal}>
                    <TouchableOpacity onPress={ () => {
                            this.setState({showModal:true});
                        }
                    }>
                        <Text style={styles.header}>{this.state.selected} ▼</Text>
                    </TouchableOpacity>
                </ModalSelector>
            </View>
        );
    }
}

export default SelectionTab;