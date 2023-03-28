import React from 'react'
import getRandomArray from '../utils/userQuotesRandom';
import phrases from '../utils/phrases.json'
const Button = ({ setQuotesRandom, setNumberImg}) => {

  const clickVariator = () => {
    
    setQuotesRandom(getRandomArray(phrases));
    setNumberImg(getRandomArray([1,2,3,4]));
  }

  return (
    <button className='Button_app' onClick={clickVariator}>Ver otro</button>
  )
}

export default Button