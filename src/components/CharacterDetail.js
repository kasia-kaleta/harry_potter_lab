import React from 'react';

const CharacterDetail = (props) => {
  if (!props.character) return null;
  return(
    <>
    <h3> Name: {props.character.name} </h3>
    <h3> House: {props.character.house} </h3>
    <img src={props.character.image}/>

    </>

  )

}

export default CharacterDetail;
