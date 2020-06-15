import React, {Fragment} from 'react';
import getImage from '../helpers/imgMap.js';

const Film = (props) => {
  return (
    <Fragment>
      <img src={getImage(props.film.image)} alt="Film"/>
      <p>{props.film.name}</p>
    </Fragment>
  )
}

export default Film;
