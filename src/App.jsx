import React from 'react';

import Header from './components/Header';
import Product from './components/Product';

import database from './database.json';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <ul className="product-list">
          {database.map((product) => (
            <Product
              title={product.title}
              description={product.description}
              imageUrl={product.image_url}
              username={product.user.username}
              avatar={product.user.avatar}
              upvotes={product.upvotes}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
