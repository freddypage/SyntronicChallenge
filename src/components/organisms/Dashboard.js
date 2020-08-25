import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
//import {Request} from 'request';
import MovieGallery from 'organisms/MovieGallery';
import {styles} from 'styles/style';
import SelectionTab from 'molecules/SelectionTab';
import { ScrollView } from 'react-native-gesture-handler';


class DashBoard extends Component {
    render() {
        
        return (
        <ScrollView>
            <View style={styles.mainApp}>

                <View style={styles.mainHeader}>
                <Text style={styles.appTitle}>Syntronic Challenge</Text>
                </View>

                <SelectionTab/>
                <MovieGallery query="Trending"/>

                <StatusBar style="auto" />

            </View>
        </ScrollView>);
    }
}

export default DashBoard;