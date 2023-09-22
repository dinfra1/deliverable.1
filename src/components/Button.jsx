import React from 'react'
import getRandomArray from '../utils/userQuotesRandom';
import phrases from '../utils/phrases.json'
const Button = ({ setQuotesRandom, setNumberImg, img}) => {

  const clickVariator = () => {
    
    setQuotesRandom(getRandomArray(phrases));
    setNumberImg(getRandomArray(img));
  }

  return (
    <button className='Button_app' onClick={clickVariator}>Ver otro</button>
  )
}

export default Button