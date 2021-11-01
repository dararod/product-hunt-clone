import React from 'react';

import Product from './components/Product';

import database from './database.json';
import './App.css';

function App() {
  return (
    <div>
      {database.map((product) => (
        <Product title={product.title} description={product.description} />
      ))}
    </div>
  );
}

export default App;
