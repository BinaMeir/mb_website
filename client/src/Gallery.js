import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import serverConfig from './serverConfig';
import Images from './Images';
import './Gallery.css'; // Ensure you have this file for custom CSS

const Gallery = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchImages = useCallback(async () => {
    try {
      setLoading(true);
      const [kitchenResponse, bathroomResponse, livingRoomResponse] = await Promise.all([
        axios.get(`${serverConfig.SERVER_URL}/images/kitchen`),
        axios.get(`${serverConfig.SERVER_URL}/images/bathroom`),
        axios.get(`${serverConfig.SERVER_URL}/images/living-room`)
      ]);

      const fetchedImages = {
        kitchen: kitchenResponse.data,
        bathroom: bathroomResponse.data,
        livingRoom: livingRoomResponse.data
      };

      setImages(fetchedImages);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!images) {
      fetchImages();
    }
  }, [images, fetchImages]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCategorySelect = (chosenCategory) => {
    setSelectedCategory(chosenCategory);
  };

  const categories = [
    { name: 'kitchen', displayName: 'Kitchen' },
    { name: 'bathroom', displayName: 'Bathroom' },
    { name: 'livingRoom', displayName: 'Living Room' }
  ];

  return (
    <div className="gallery">
      <h2>Welcome to the Gallery!</h2>
      {!selectedCategory ? (
        <div className="category-selection">
          {categories.map((category) => (
            <div key={category.name} className="category-card" onClick={() => handleCategorySelect(category.name)}>
              <div className="category-image-wrapper">
                <img src={`${process.env.PUBLIC_URL}/${category.name}.jpg`} alt={`${category.displayName}`} className="category-image" />
                <div className="category-overlay">
                  <span className="category-title">{category.displayName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="image-display">
          <Images imageList={images[selectedCategory]} />
          <button className="back-button" onClick={() => setSelectedCategory(null)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
