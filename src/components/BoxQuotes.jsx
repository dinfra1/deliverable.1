import React from 'react'

const BoxQuotes = ({ quotesRandom, appStyle}) => {
  return (
    <p className='App_quotes' style={appStyle}>{quotesRandom.phrase}</p>
  )
}

export default BoxQuotes;