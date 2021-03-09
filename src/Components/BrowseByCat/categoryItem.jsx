import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesItem = ({ category }) => {
  return (
    <div class="categories__slide">
      <Link
        class="categories__item"
        to={{
          pathname: '/category',
          category: category.name,
        }}
      >
        <div class="categories__icon">
          <img
            class="categories__pic"
            src="img/categories/shopping-bag.svg"
            alt=""
          />
        </div>
        <div class="categories__text">{category.name}</div>
      </Link>
    </div>
  );
};

export default CategoriesItem;
