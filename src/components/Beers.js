import React, { useState } from 'react';
import './beer.css'

function Beer(props) {
  const { image_url, name, abv, tagline, description } = props.singleBeer;
  const [isLiked, setIsLiked] = useState(false)

  return (
    <li className='beerListItem'>
      <div className="beerImgContainer">
        <img 
          className='beerImg' 
          src={image_url} 
          alt={name} 
        />
      </div>
      <div className="beerInfo">
        <h2>{name}</h2>
        <h3>{abv} abv | {tagline}</h3>
        <p>{description}</p>
        <button className='heartBtn' onClick={() => {!isLiked ? setIsLiked(true) : setIsLiked(false)}}>
          {isLiked ? 
            <i style={{color: "rgb(156, 104, 152)"}} class="fas fa-heart fa-2x"></i> :
              <i style={{color: "rgb(156, 104, 152)"}} className="far fa-heart fa-2x"></i>
          }
        </button>
      </div>
    </li>
  )
}

export default Beer;