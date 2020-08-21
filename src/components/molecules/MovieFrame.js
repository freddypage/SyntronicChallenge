import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Poster from "atoms/Poster";
import TitleCard from "atoms/TitleCard";

function MovieFrame(props){
    return(
        <View>
            <Poster id={props.id} url={props.url}></Poster>
            <TitleCard title={props.title} overview={props.overview}/> 
        </View>
    );
}

export default MovieFrame;