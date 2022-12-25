import React from 'react';
import Data from './Data';
import classes from './DetailsInCard.module.css'
const detailsInCard = (props) => {
    const { repos } = props;
    const listrepos = repos.length !== 0 ? repos.map((item) => {
        return (
            <Data key={item.id} name={item.name} description={item.description}
                language={item.language}
                avatar={item.owner.avatar_url}
                score={item.score}
                watchers_count={item.watchers_count} />
        )
    }) : <div>No repos are found for given search</div>

    return (
        <div className={classes.cards_container}>
            {listrepos}

        </div>)


}
export default detailsInCard