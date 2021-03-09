import React, { useEffect } from 'react';
import Banner from '../Banner';
import BrowseByCat from '../BrowseByCat';
import ExploreOurProducts from '../ExploreOurProducts';
import WhyPeopleChooseUs from '../WhyPeopleChooseUs';
import Blog from '../Blog';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { getCategories } from '../../redux/actions/categoryActions';

/**
 * @author
 * @function Home
 **/

const Home = ({
  product: { products, productLoading },
  category: { categories, categoryLoading },
  getProducts,
  getCategories,
}) => {
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div>
      <Banner />
      <BrowseByCat categories={categories} loading={categoryLoading} />
      <ExploreOurProducts products={products} loading={productLoading} />
      <WhyPeopleChooseUs />
      <Blog />
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
  category: state.category,
});

export default connect(mapStateToProps, { getProducts, getCategories })(Home);
