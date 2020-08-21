import React, {useState, Component} from 'react';
import {Text, TextInput, View, ActivityIndicator} from 'react-native';
import { ListView } from 'react-native';
import {FlatList} from 'react-native';
import MovieFrame from 'molecules/MovieFrame';
import { styles, buttons } from 'styles/style';




class MovieGallery extends Component
{
    componentDidMount() {
        //get list of popular movies
        return fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=c06e14cd13b2c6373fdc8f9f3dd47eb3').then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson.results[0].id);
            //console.log(responseJson.results[0].poster_path);
            this.setState({data:responseJson.results});
            this.setState({length:Object.keys(responseJson.results).length});
            console.log(Object.keys(responseJson.results).length);
            return responseJson.results;
        })
        .catch((error) => console.log(error))
        .finally(() => {
            this.setState({ isLoading: false });
        })
    }

    constructor(props)
    {
        var d = new Date();
        console.log(d.getTime()  );
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    render() {
        const {data, isLoading} = this.state;
        return(
        <View style={styles.movieGallery}>
            {isLoading ? <ActivityIndicator/> : ( 
                <FlatList data={data}
                keyExtractor={
                    ({ id }, index) => id
                }
                renderItem={
                    ({item}) => <MovieFrame title={item.title} overview={item.overview} id={item.id} url={item.poster_path}/>
                }
                />
            )}
        </View>
        );
    }
}

export default MovieGallery;