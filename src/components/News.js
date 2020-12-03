import React from 'react';
import * as axios from 'axios';
import Article from './Article';

class News extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            news : [],
            headlines: []
        };
        this.getNews = this.getNews.bind(this);
    }

    getNews(data) {
        data.map(i => this.state.headlines.push(i.title));
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=russia&apiKey=d7a51ec1349f4111afb23128ac6591d1`).then(response => this.getNews(response.data.articles));
    }
    
    render() {
        return <Article {...this.props} headlines={this.state.headlines}/>
    }
}


export default News;