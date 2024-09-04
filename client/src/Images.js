import { useState, useEffect, useCallback } from 'react';
import './Images.css'; // Ensure you have this file for custom CSS

const Images = ({ imageList }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [startX, setStartX] = useState(0);

  function binaryToBlob(imageData, imageType) {
    const byteArray = new Uint8Array(imageData);
    const blob = new Blob([byteArray], { type: imageType });
    return blob;
  }

  // Memoize the handleNextImage function
  const handleNextImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  }, [imageList.length]);

  // Memoize the handlePrevImage function
  const handlePrevImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  }, [imageList.length]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const endX = e.touches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) {
      handleNextImage();
    } else if (diff < -50) {
      handlePrevImage();
    }

    setStartX(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowRight') {
          handleNextImage();
        } else if (e.key === 'ArrowLeft') {
          handlePrevImage();
        } else if (e.key === 'Escape') {
          setSelectedImageIndex(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, handleNextImage, handlePrevImage]);

  if (imageList == null) {
    return <div>Sorry, this gallery is empty</div>;
  }

  const selectedImage = imageList[selectedImageIndex];

  return (
    <div>
      <div className="images-grid">
        {imageList.map((image, index) => (
          <div className="image-card" key={image.id} onClick={() => setSelectedImageIndex(index)}>
            <img
              src={URL.createObjectURL(binaryToBlob(image.image.data, image.imageType))}
              alt={image.fileName}
              className="image"
            />
          </div>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div
          className="lightbox"
          onClick={() => setSelectedImageIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={URL.createObjectURL(binaryToBlob(selectedImage.image.data, selectedImage.imageType))}
              alt={selectedImage.fileName}
              className="lightbox-image"
            />
            <button className="close-button" onClick={() => setSelectedImageIndex(null)}>Close</button>
            <button className="prev-button" onClick={handlePrevImage}>Previous</button>
            <button className="next-button" onClick={handleNextImage}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
