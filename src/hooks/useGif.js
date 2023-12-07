import { useEffect, useState } from 'react'
import axios from 'axios';


const url = `https://api.giphy.com/v1/gifs/random?api_key=5uIuKPz85ypFn7wrx5AQ403srN8oqA5G`;

const useGif = (tag) => {
    
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');
  
  async function fetchData(tag){
    setLoading(true);

    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData('car');
  }, [])

  return {gif, loading, fetchData};

}

export default useGif