import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Poster from "atoms/Poster";
import TitleCard from "atoms/TitleCard";
import { styles, buttons } from 'styles/style';

function MovieFrame(props){
    return(
        <View style={[styles.container, styles.movieFrame]}>
            <Poster id={props.id} url={props.url}></Poster>
            <TitleCard title={props.title} overview={props.overview}/> 
        </View>
    );
}

export default MovieFrame;