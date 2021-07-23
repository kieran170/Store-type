import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';

import { UserContext } from '../../context';
import BasketModel from './BasketModel';
import { Product } from '../../types/productTypes' 
import * as api from '../../axios/api'

interface IProps {
    items: string
}

export default function Men(props: IProps) {

    const {items} = props;

    const userContext = useContext(UserContext);

    const [newItems, setItems] = useState<[] | Product[]>([])

    const addToBasket = (e: React.MouseEvent, item: Product ) => {
        console.log(item.price)
        userContext?.dispatch({
            type: 'ADD_TO_BASKET',
            payload: {price: item.price, name: item.title},
            key: Object.keys(userContext.state.basket).length
        })
        userContext?.dispatch({
            type: 'ADD_TO_TOTAL',
            number: item.price,
        })
    }

    useEffect(() => {
        api.getProducts(items).then((data) => {
            setItems(data)
        })
    }, [items])
    

    return (
        <div className='page-container'>
            <div className='button-container'>
                <BasketModel/>
            </div>
            <div className='items-container'>
                {newItems.map((item) => {
                    return (
                        <div key={item.id} className='list-container'>
                            <li className='item-list-container'>
                                <ul className='list-item'>
                                    <h3>{item.title}</h3>
                                </ul>
                                <ul>
                                    <img style={{height: '100px'}} src={item.image} alt='product'/>
                                </ul>
                                <ul>
                                    Price: ${item.price}
                                </ul>
                                <ul>
                                    <div style={{width: '50%'}}>
                                       {item.description} 
                                    </div>
                                </ul>
                                <Button style={{marginLeft: '30px'}} onClick={(e) => addToBasket(e, item)} animated='fade'>
                                    <Button.Content visible>Add To Basket</Button.Content>
                                    <Button.Content hidden>{`$${item.price}`}</Button.Content>
                                </Button>
                            </li>     
                        </div>
                    )
                })}
            </div>           
        </div>
    )
}
