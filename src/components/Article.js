import React from 'react';
import s from './ArticleStyle.module.css'
import Moment from 'react-moment';


const Article = (props) => {
    return (

        <div className={s.articlesBlock}>
            {props.news.map(i => {
                return (
                    <div className={s.articleItem}>
                    <div className={s.articleTitle}>
                        <a href={i.url}><h3>{i.title}</h3></a>
                        <Moment format="Do MMMM YYYY">{i.publishedAt}</Moment>
                    </div>
                    <div className={s.articleDescription}>
                        <a href={i.url}><img src={i.urlToImage} width='200' height='130'/></a>
                    </div>
                    </div>
                    )
            }
            )}
        </div>
    )
}

export default Article