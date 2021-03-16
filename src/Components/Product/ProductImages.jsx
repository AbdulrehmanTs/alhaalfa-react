import React from 'react';

const ProductImages = ({ image, productImage, setProductImage }) => {
  const onClick = (image) => {
    setProductImage((prev) => (prev = image));
  };

  return (
    <div
      className="card__slide"
      onClick={() => onClick(image)}
      style={{ cursor: 'pointer' }}
    >
      <div className="card__preview" href="">
        <img
          className="card__pic products__images__preview"
          src={image}
          alt=""
          style={{ borderRadius: '15px' }}
        />
      </div>
    </div>
  );
};

export default ProductImages;
