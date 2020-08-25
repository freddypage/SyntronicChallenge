import React, {useState, Component} from 'react';
import {Text, TextInput, View, ActivityIndicator} from 'react-native';
import { ListView } from 'react-native';
import {FlatList} from 'react-native';
import MovieFrame from 'molecules/MovieFrame';
import { styles, buttons } from 'styles/style';
import {connect} from 'react-redux';




//expect query as props
class MovieGallery extends Component
{
    componentDidMount() {
        this.fetchFromAPI(this.props.query);
    }

    componentDidUpdate(prev){
        if(prev.query!=this.props.query){
            this.fetchFromAPI(this.props.query);
        }
    }

    fetchFromAPI(str) {
        //expects Trending, Now Playing, or Popular
        this.setState({isLoading:true});
        var url;
        switch(str)
        {
            case "Trending":
                url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=c06e14cd13b2c6373fdc8f9f3dd47eb3';
                break;
            case "Popular":
                url = 'https://api.themoviedb.org/3/movie/popular?api_key=c06e14cd13b2c6373fdc8f9f3dd47eb3&language=en-US&page=1';
                break;
            case "Now Playing":
                url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=c06e14cd13b2c6373fdc8f9f3dd47eb3';
                break;
            default: 
                url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=c06e14cd13b2c6373fdc8f9f3dd47eb3';
                break;
        }
        //get list of popular movies
        return fetch(url).then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson.results[0].id);
            //console.log(responseJson.results[0].poster_path);
            this.setState({data:responseJson.results});
            this.setState({length:Object.keys(responseJson.results).length});
            return responseJson.results;
        })
        .catch((error) => console.log(error))
        .finally(() => {
            this.setState({ isLoading: false });
        })
    }

    constructor(props)
    {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            length: 0,
            query:this.props.query
        };
    }

    render() {
        const {data, isLoading} = this.state;
        return(
            <View style={styles.movieGallery}>
                {isLoading ? <ActivityIndicator/> : ( 
                    <FlatList data={data}
                    horizontal={true}
                    keyExtractor={
                        ({ id }, index) => id.toString()
                    }
                    renderItem={
                        ({item}) => 
                        <MovieFrame 
                        title={item.title} 
                        overview={item.overview} 
                        id={item.id} 
                        url={item.poster_path}
                        vote_average={item.vote_average}
                        release_date={item.release_date}/>
                    }
                    />
                )}
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
      query: state.query
    };
  }

export default connect(mapStateToProps)(MovieGallery);