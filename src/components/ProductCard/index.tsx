import React from 'react'
import styles from './ProductCard.module.scss'
import catPicture from '../../assets/cat.png'
import { ProductProps } from './product.types'
import { backColors } from './product.utils'

export const ProductCard: React.FC<ProductProps> = ({title, mouses, name, portions, taste, weight, stock}: ProductProps) => {
  const [selected, setSelected] = React.useState(false)
  
  const selectProduct = () => {
    setSelected((value) => !value)
  }

  const getColor = () =>{
    if(stock){
      if(selected){
        return backColors.ACTIVE
      }else{
        return backColors.PASSIVE
      }
    }else{
      return backColors.OUTSTOCK
    }
  }

  return (
    <div className={styles.card}>
        <div onClick={() => selectProduct()} style={{backgroundColor: getColor()}} className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.taste}>{taste}</div>
            <div className={styles.portion}><span className={styles.count}>{portions}</span> порций</div>
            <div className={styles.gift}><span className={styles.count}>{mouses}</span> мышь в подарок</div>
          </div>
          <div className={styles.imgWrapper}>
            <img src={catPicture} alt="Cat" />
          </div>
          <div className={styles.ball} style={{backgroundColor: getColor()}}>
            <div className={styles.weightWrapper}>
              <div className={styles.weight}>{weight}</div>
              <div className={styles.kilo}>кг</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.underText}>Чего сидишь? Порадуй котэ, <span onClick={() => selectProduct()}>купи</span></div>
    </div>
    
  )
}