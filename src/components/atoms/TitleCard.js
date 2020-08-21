import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

function TitleCard (props){
    return(
        <View>
            <Text>{props.title}</Text>
            <Text>{props.overview}</Text>
        </View>
    );
}

export default TitleCard;