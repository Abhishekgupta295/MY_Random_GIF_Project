import React from 'react'

import Spinner from './Spinner';
import useGif from '../hooks/useGif'



const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;  // Assuming this is an environment variable. You need to set it in your .env file.

const Random = () => {

  const {gif, laoding, fetchData} = useGif()
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random GIFS</h1>
      {
        laoding ? (<Spinner/>) : ( <img src={gif} alt='randomgif'></img>)
      }
        
      <button
       className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
       onClick={fetchData}
      >
        Generate
      </button>
    </div>
  )
}

export default Random