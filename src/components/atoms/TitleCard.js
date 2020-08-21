import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import { styles, buttons } from 'styles/style';

function TitleCard (props){
    return(
        <View>
            <Text style={[styles.centered, styles.header]}>{props.title}</Text>
            <Text style={styles.centered}>{props.overview}</Text>
        </View>
    );
}

export default TitleCard;