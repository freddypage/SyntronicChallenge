﻿import React from 'react';
import { View} from 'react-native';
import TitleCard from "atoms/TitleCard";
import { styles } from 'styles/style';
import ExpandablePoster from 'molecules/ExpandablePoster';

function MovieFrame(props){
    return(
        <View style={[styles.movieFrame]}>
            <ExpandablePoster 
            id={props.id} 
            url={props.url} 
            title={props.title} 
            overview={props.overview}
            release_date={props.release_date}
            vote_average={props.vote_average}/>
            <TitleCard title={props.title} overview={props.overview}/> 
        </View>
    );
}

export default MovieFrame;