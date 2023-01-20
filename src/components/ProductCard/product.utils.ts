export enum backColors{
    PASSIVE="#1698d9",
    ACTIVE="#d91667",
    OUTSTOCK="#b3b3b3"
}

export const portionsArray = ['порция', 'порции','порций']
export const giftsArray = ['мышь', 'мыши', 'мышей']

export const getColor = (stock: boolean, selected: boolean) =>{
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

export const getCorrectStringIndex = (value: number) => {
	value = Math.abs(value) % 100; 
	let num = value % 10;
	if(value > 10 && value < 20) return 2;
	if(num > 1 && num < 5) return 1;
	if(num === 1) return 0; 
	return 2;
}

