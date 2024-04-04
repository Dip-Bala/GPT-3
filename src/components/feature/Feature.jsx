import React from 'react';
import './Feature.css';

const Feature = (props) => {
  return (
    <div className="gpt3-feature">
      <div className='gpt3-feature-title'>
      <div />
        <h1>{props.title}</h1>
      </div>
      <div className='gpt3-feature-text'>
        <p>{props.text}</p>
      </div>
    </div>

  )
}

export default Feature