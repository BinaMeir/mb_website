import { useEffect, useState } from 'react';
import axios from 'axios';
import serverConfig from './serverConfig';
import Images from './Images';

const Recommendations = () => {

const [images, setImages] = useState([])
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchImages = async () => {
      try {
        const recImages = await axios.get(serverConfig.SERVER_URL+'/recommendations');

        setImages(recImages.data);
        console.log(recImages)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

    if (loading) {
    return <div>Loading...</div>;
    }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


    return ( 
        <div className="recommendations">
            <h2>Welcome to recommendations!</h2>
            <div>
                {/* Display images of the selected category */}
                <Images imageList={images} />
            </div>
        </div>
     );
} 

export default Recommendations;


