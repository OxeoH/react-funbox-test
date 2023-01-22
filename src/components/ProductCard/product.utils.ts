export enum backColors{
    PASSIVE="#1698d9",
    ACTIVE="#d91667",
    OUTSTOCK="#b3b3b3",
    HOVERPASSIVE="#2ea8e6",
    HOVERACTIVE="#e62e7a"
}

export const portionsArray = ['порция', 'порции','порций']
export const giftsArray = ['мышь', 'мыши', 'мышей']

export const getColor = (stock: boolean, selected: boolean, hover: boolean) =>{
    if(stock){
      if(selected){
        if(hover){
          return backColors.HOVERACTIVE
        }else{
          return backColors.ACTIVE
        }
      }else{
        if(hover){
          return backColors.HOVERPASSIVE
        }else{
          return backColors.PASSIVE
        }
      }
    }else{
      return backColors.OUTSTOCK
    }
}

export const getCorrectStringIndex = (value: number) => {
	value = Math.abs(value) % 100; 
	let num = value % 10;
	if(value > 10 && value < 20) return 2;
	if(num > 1 && num < 5) return 1;
	if(num === 1) return 0; 
	return 2;
}

