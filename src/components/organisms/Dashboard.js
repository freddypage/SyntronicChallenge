import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
//import {Request} from 'request';
import MovieGallery from 'organisms/MovieGallery';
import {styles} from 'styles/style';
import SelectionTab from 'atoms/SelectionTab';


class DashBoard extends Component {
    render() {
        
        return (
        <View style={styles.mainApp}>

            <View style={styles.mainHeader}>
            <Text style={styles.appTitle}>Syntronic Challenge</Text>
            </View>

            <SelectionTab/>
            <MovieGallery />

            <StatusBar style="auto" />

        </View>);
    }
}

export default DashBoard;