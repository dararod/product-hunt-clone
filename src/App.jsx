import React, { useState } from 'react';

import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';
import data from './data';

import './App.css';

function App() {
  const [productsList, setProductsList] = useState(data);

  const upvoteProduct = (id) => {
    const productListClone = [...productsList];
    const elementIndex = productListClone.findIndex((el) => el.id === id);

    productListClone[elementIndex] = {
      ...productListClone[elementIndex],
      upvotes: productListClone[elementIndex].upvotes + 1,
    };

    setProductsList(productListClone);
  };

  const downvoteProduct = (id) => {
    const productListClone = [...productsList];
    const elementIndex = productListClone.findIndex((el) => el.id === id);

    productListClone[elementIndex] = {
      ...productListClone[elementIndex],
      downvotes: productListClone[elementIndex].downvotes + 1,
    };

    setProductsList(productListClone);
  };
  return (
    <>
      <Header />
      <main>
        <ul className="product-list">
          {productsList.map((product) => (
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.image_url}
              username={product.user.username}
              avatar={product.user.avatar}
              upvotes={product.upvotes}
              downvotes={product.downvotes}
              upvoteProduct={upvoteProduct}
              downvoteProduct={downvoteProduct}
            />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default App;
