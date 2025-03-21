// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;  
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// // Assuming this is an environment variable. You need to set it in your .env file.

// const useGif = (tag) => {

//   const [gif, setGif] = useState('')
//   const [laoding , setLoading] = useState(false)
  
  

//   async function fetchData(tag)
//   {
//     setLoading(true)
    
//     const output = await axios.get(tag ? `${url}&tag=${tag}`  : url)
//     const imageSource = output.data.data.images.downsized_large.url ;
//     console.log(imageSource)
//     console.log(tag)
//     setGif(imageSource)
//     setLoading(false)
//   }

//     useEffect(( )=>
//      {
//         fetchData(tag);
        
//      },  [])

//      return {gif,laoding,fetchData}
   
// }

// export default useGif

import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

  
    async function fetchData(tag) {
      setLoading(true);
      
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
    
    useEffect( () => {
      fetchData('car');
    },[] )

    return {gif,loading, fetchData};
}

export default useGif
