import React from 'react';
import * as axios from 'axios';
import Article from './Article';

class News extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            news : [
                {id: 1, title: 'Shooting in Arkansas'},
                {id: 2, title: 'Dancing in the moonlight'},
                {id: 3, title: 'Dancing in the moonlight'}
            ],
            headlines: [],
            title: 'slowpoke'
        };
        this.getNews = this.getNews.bind(this);
        this.getHeadlines = this.getHeadlines.bind(this);
        this.getNews();
    }

    getNews() {
        let url = `https://pokeapi.co/api/v2/pokemon/${this.state.title}`;
        axios.get(url).then(response => this.getHeadlines(response.data.abilities));
        console.log("CLick!");
    }

    getHeadlines(data) {
        if (data.length === 0){
            this.setState(
                {headlines : this.state.news}
            )
        } else {
            let newArray = []
            data.map(i => newArray.push(i.ability.name));
            this.setState({
                headlines : newArray
            })
        }
        console.log(`Array in News: ${this.state.headlines}`)
    }

    componentDidMount() {
        
        
    }
    
    render() {
        return (
        <div>
            <Article headlines={this.state.headlines} name={this.state.title}/>
        </div>
        )
    }
}


export default News;