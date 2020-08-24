import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import TitleCard from "atoms/TitleCard";
import { styles, buttons } from 'styles/style';
import ExpandablePoster from 'molecules/ExpandablePoster';

function MovieFrame(props){
    return(
        <View style={[styles.container, styles.movieFrame]}>
            <ExpandablePoster id={props.id} url={props.url} title={props.title} overview={props.overview}/>
            <TitleCard title={props.title} overview={props.overview}/> 
        </View>
    );
}

export default MovieFrame;