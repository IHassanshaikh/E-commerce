import React, { useContext, useEffect } from 'react';
import Banner from './banner/banner';
import Category from '../category/category';
import Products from '../products/products';
import Arrival from './newarrival/newarrival';
import Discount from './discount/discount';
import Method from './order/method';
import { FetchData } from '../../utilities/api';
import { Context } from '../../utilities/context';

const Home = () => {
  const { category, setCategory, products, setProducts } = useContext(Context);

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);
  const getCategory = () => {
    FetchData("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategory(res.data);
    });
  };

  const getProducts = () => {
    FetchData("/api/sales?populate=*").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  };

  return (
    <>
      <Banner />
      <Category category={category} />
      <Products products={products} />
      <Arrival />
      <Discount />
      <Method />
    </>
  );
};

export default Home;
