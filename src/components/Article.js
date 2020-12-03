import React from 'react';

const Article = (props) => {
    console.log(`Das ist props: ${props.headlines}`)

    return (

        <div>
            <h2>{props.name}</h2>
            {props.headlines.map(i => {return <p>{i}</p>
            }
            )}
        </div>
    )
}

export default Article