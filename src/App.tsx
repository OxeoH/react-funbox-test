import React from 'react';
import './App.css';
import { ProductCard } from './components/ProductCard';
import { products } from './store/products.store';
import styles from './App.module.scss'


function App() {
  return (
    <div className="App">
      <div className={styles.content}>
        <div className={styles.header}>Ты сегодня покормил кота?</div>
        <div className={styles.products}>
          {
            products.map(product => (
              <ProductCard
                key={products.indexOf(product)}
                title={product.title} 
                name={product.name} 
                taste={product.taste} 
                portions={product.portions} 
                mouses={product.mouses} 
                weight={product.weight}
                stock={product.stock}
                selectedText={product.selectedText} 
              />))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
