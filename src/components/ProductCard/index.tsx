import React from 'react'
import styles from './ProductCard.module.scss'
import catPicture from '../../assets/cat.png'

const ProductCard: React.FC = () => {
  const [selected, setSelected] = React.useState(false)


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <img src={catPicture} alt="Cat" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard