import React from 'react'
import styles from './ProductCard.module.scss'
import catPicture from '../../assets/cat.png'
import { ProductProps } from './product.types'
import { backColors, getColor, getCorrectStringIndex, giftsArray, portionsArray } from './product.utils'

export const ProductCard: React.FC<ProductProps> = ({title, mouses, name, portions, taste, weight, stock, selectedText}: ProductProps) => {
  const [selected, setSelected] = React.useState(false)
  const [hover, setHover] = React.useState(false)

  const portionsIndex = getCorrectStringIndex(portions)
  const giftIndex = getCorrectStringIndex(mouses)

  const backRef = React.createRef<HTMLDivElement>();
  const weightRef = React.createRef<HTMLDivElement>();
  
  const selectProduct = () => {
    if(stock) setSelected((value) => !value)
    return
  }

  const handleMouseOver = () =>{
    setHover(true)

    if(backRef.current !== null){
      backRef.current.style.backgroundColor = getColor(stock, selected, hover)
    }

    if(weightRef.current !== null){
      weightRef.current.style.backgroundColor = getColor(stock, selected, hover)
    }
  }

  const handleMouseOut = () =>{
    setHover(false)

    if(weightRef.current !== null){
      weightRef.current.style.backgroundColor = getColor(stock, selected, hover)
    }

    if(backRef.current !== null){
      backRef.current.style.backgroundColor = getColor(stock, selected, hover)
    }
  }

  const renderBottom = () =>{
    if(stock){
      if(selected){
        return <div className={styles.underText}>{selectedText}</div>
      }else{
        return <div className={styles.underText}>Чего сидишь? Порадуй котэ, <span onClick={() => selectProduct()}>купи</span></div>
      }
    }else{
      return <div className={styles.underText} style={{color: '#ffff66'}}>Печалька, {taste} закончился.</div>
    }
  }

  return (
    <div className={styles.card}>
        <div className={styles.outstock} style={{display: stock ? 'none' : ''}}></div>
        <div
          ref={backRef}
          onClick={() => selectProduct()}
          style={{backgroundColor: getColor(stock, selected, hover)}}
          className={styles.container}
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
          >
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.title} style={{display: (hover && selected) ? 'none' : ''}}>
              {title}
            </div>
            <div className={styles.title}
              style={{color: backColors.HOVERACTIVE, display: (hover && selected) ? '' : 'none'}}>
              Котэ не одобряет?
            </div>
            <div className={styles.name} style={{color: !stock ? backColors.OUTSTOCK : ''}}>{name}</div>
            <div className={styles.taste} style={{color: !stock ? backColors.OUTSTOCK : ''}}>{taste}</div>
            <div className={styles.portion}>
              <span className={styles.count}>{portions}</span> {portionsArray[portionsIndex]}
            </div>
            <div className={styles.gift}>
              <span className={styles.count}>{mouses}</span> {giftsArray[giftIndex]} в подарок
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <img src={catPicture} alt="Cat" />
          </div>
          <div ref={weightRef} className={styles.ball} style={{backgroundColor: getColor(stock, selected, hover)}}>
            <div className={styles.weightWrapper}>
              <div className={styles.weight}>{weight}</div>
              <div className={styles.kilo}>кг</div>
            </div>
          </div>
        </div>
      </div>
      {renderBottom()}
    </div>
    
  )
}