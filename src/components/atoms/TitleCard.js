import React from 'react';
import {Text, View} from 'react-native';
import { styles } from 'styles/style';

function TitleCard (props){
    return(
        <View>
            <Text style={[styles.centered, styles.header, styles.titleCard]}>{props.title}</Text>
        </View>
    );
}

export default TitleCard;