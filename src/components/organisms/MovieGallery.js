import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native';
import MovieFrame from 'molecules/MovieFrame';
import { styles } from 'styles/style';
import {connect} from 'react-redux';




//expect query as props
class MovieGallery extends Component
{
    //populate gallery on first load
    componentDidMount() {
        this.fetchFromAPI(this.props.query);
    }

    //populate gallery on store state changes
    componentDidUpdate(prev){
        if(prev.query!=this.props.query){
            this.fetchFromAPI(this.props.query);
        }
    }

    //takes a str returns an endpoint form movie database
    formatEndpoint(str)
    {
        var url;
        var apiKey = "?api_key=c06e14cd13b2c6373fdc8f9f3dd47eb3";
        var base_uri = "https://api.themoviedb.org/3/";
        switch(str)
        {
            case "Trending":
                url = base_uri+'trending/movie/week'+apiKey;
                break;
            case "Popular":
                url = base_uri+'movie/popular'+apiKey;
                break;
            case "Now Playing":
                url = base_uri+'movie/now_playing'+apiKey;
                break;
            default: 
                url = base_uri+'trending/movie/week'+apiKey;
                break;
        }
        return url;
    }

    //get data from api
    //returns null if request invalid
    fetchFromAPI(str) {
        this.setState({isLoading:true});
        var url = this.formatEndpoint(str);
        //get endpoint then fetch
        return fetch(url).then((response) => response.json())
        .then((responseJson) => {
            if(!responseJson||!responseJson.results||responseJson.success==false)
            {
                throw responseJson;
            }
            this.setState({data:responseJson.results});
            this.setState({length:Object.keys(responseJson.results).length});
            this.setState({ isLoading: false });
            return responseJson.results;
        })
        .catch((error) => console.log(error))
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