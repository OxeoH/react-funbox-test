import React from 'react'
import styles from './ProductCard.module.scss'
import catPicture from '../../assets/cat.png'

const ProductCard: React.FC = () => {
  const [selected, setSelected] = React.useState(false)


  return (
    <div className={styles.card}>
        <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.title}>Сказочное заморское яство</div>
            <div className={styles.name}>Нямушка</div>
            <div className={styles.taste}>с фуа-гра</div>
            <div className={styles.portion}><span className={styles.count}>10</span> порций</div>
            <div className={styles.gift}><span className={styles.count}>1</span> мышь в подарок</div>
          </div>
          <div className={styles.imgWrapper}>
            <img src={catPicture} alt="Cat" />
          </div>
          <div className={styles.ball}>
            <div className={styles.weightWrapper}>
              <div className={styles.weight}>0,5</div>
              <div className={styles.kilo}>кг</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.underText}>Чего сидишь? Порадуй котэ, <a href="/">купи</a></div>
    </div>
    
  )
}

export default ProductCard