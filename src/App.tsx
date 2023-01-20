import React from 'react';
import './App.css';
import { ProductCard } from './components/ProductCard';
import { products } from './store/products.store';


function App() {
  return (
    <div className="App">
      {
        products.map(product => (
          <ProductCard
            key={product.toString()}
            title={product.title} 
            name={product.name} 
            taste={product.taste} 
            portions={product.portions} 
            mouses={product.mouses} 
            weight={product.weight}
            stock={product.stock} 
          />))
      }
    </div>
  );
}

export default App;
