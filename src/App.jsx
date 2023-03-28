import './App.css'
import getRandomArray from './utils/userQuotesRandom'
import phrases from './utils/phrases.json'
import Button from './components/Button'
import BoxQuotes from './components/BoxQuotes'
import { useState } from 'react'

const img = [1,2,3,4];

function App() {

    const [quotesRandom, setQuotesRandom] = useState(getRandomArray(phrases));
    const [numberImg, setNumberImg] = useState(getRandomArray(img))
    console.log(quotesRandom);

    const appStyle = {
      backgroundImage: `url('/imgfond/fondo${numberImg}.jpg')`
    }

  return (
    <div style={appStyle} className="App">
      <h1 className='Title'>GALETA DE LA FORTUNA</h1>
      <BoxQuotes quotesRandom={quotesRandom} />
      <Button setQuotesRandom={setQuotesRandom} setNumberImg={setNumberImg} />
    </div>
  )
}

export default App
