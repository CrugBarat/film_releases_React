import React, {Fragment} from 'react';
import getImage from '../helpers/imgMap.js';

const Film = (props) => {
  return (
    <Fragment>
    <div className="film-container">
      <div className="film-title-container">
        <p className="film-title">{props.film.name}</p>
        <p className="film-details">
          <span>{props.film.rating}</span>  |  <span>{props.film.runtime}</span>  |  <span>{props.film.genre}</span>  |  <span>{props.film.releaseDate}</span>
        </p>
      </div>
      <div className="film-image">
        <img src={getImage(props.film.image)} alt="Film"/>
      </div>
      <div className="film-description">
        <p>{props.film.description}</p>
        <p className="film-link"><a  href={props.film.url}>Visit imDb for more detials</a></p>
      </div>
    </div>
    </Fragment>
  )
}

export default Film;
