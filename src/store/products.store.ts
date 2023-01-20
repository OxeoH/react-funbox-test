import { ProductProps } from "../components/ProductCard/product.types";

export const products: ProductProps[] = [
    {
        title: 'Сказочное заморское яство',
        name: 'Нямушка',
        taste: 'с фуа-гра',
        portions: 10,
        mouses: 1,
        weight: '0,5',
        stock: true
    },
    {
        title: 'Сказочное заморское яство',
        name: 'Нямушка',
        taste: 'с рыбой',
        portions: 40, 
        mouses: 2,
        weight: '2',
        stock: true
    },
    {
        title: 'Сказочное заморское яство',
        name: 'Нямушка',
        taste: 'с курой',
        portions: 100, 
        mouses: 5,
        weight: '5',
        stock: false
    },
]