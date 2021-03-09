import React from 'react';

const ProductImages = ({ image }) => {
  return (
    <>
      <div className="card__slide">
        <a
          className="card__preview active"
          data-image={image}
          data-zoom-image={image}
          href="#"
        >
          <img className="card__pic" src={image} alt="" />
        </a>
      </div>
    </>
  );
};

export default ProductImages;
