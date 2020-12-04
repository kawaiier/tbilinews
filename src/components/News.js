import React from 'react';
import * as axios from 'axios';
import Article from './Article';
import s from './News.module.css'

class News extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            news : [
                {id: 1, title: 'Loading news', urlToImage: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffuturestartup.com%2Fwp-content%2Fuploads%2F2012%2F11%2Fstart.jpg&f=1&nofb=1', url: 'https://github.com/kawaiier/tbilinews'},
            ],
            headlines: [],
            title: 'News',
            newsRequested: true
        };
        this.getNews = this.getNews.bind(this);
        this.getHeadlines = this.getHeadlines.bind(this);
    }

    getNews() {
        if (this.state.newsRequested) {
            let url = process.env.REACT_APP_NEWS_API;
            axios.get(url).then(response => this.getHeadlines(response.data.articles));
            this.setState({
                newsRequested: false
                })
        }
    }

    getHeadlines(data) {
        if (data.length === 0){
            this.setState(
                {headlines : this.state.news}
            )
        } else {
            this.setState(
                {news : data}
            )
            let newArray = []
            data.map(i => newArray.push(i.title));
            this.setState({
                headlines : newArray
            })
        }
    }

    componentDidMount() {
        this.getNews();
    }
    
    render() {
        return (
        <div className={s.articlesPage}>

            <Article headlines={this.state.headlines} name={this.state.title} news={this.state.news}/>
            
        </div>
        )
    }
}


export default News;