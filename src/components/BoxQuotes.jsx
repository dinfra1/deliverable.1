import React from 'react'

const BoxQuotes = ({ quotesRandom }) => {
  return (
    <p className='App_quotes'>{quotesRandom.phrase}</p>
  )
}

export default BoxQuotes;