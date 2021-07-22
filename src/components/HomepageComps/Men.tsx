import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { UserContext } from '../../context';
import { Item } from '../../types/contextTypes';
import BasketModel from './BasketModel'

interface IProps {
    items: Item[]
}

export default function Men(props: IProps) {

    const userContext = useContext(UserContext);

    const {items} = props;

    const addToBasket = (e: React.MouseEvent, item: Item ) => {
        console.log(item.price)
        userContext?.dispatch({
            type: 'ADD_TO_BASKET',
            payload: item,
            key: Object.keys(userContext.state.basket).length
        })
        userContext?.dispatch({
            type: 'ADD_TO_TOTAL',
            number: item.price,
        })
    }
    

    return (
        <div className='page-container'>
            <div className='items-container'>
                {items.map((item) => {
                    return (
                        <div key={item.name} className='list-container'>
                            <li className='item-list-container'>
                                <ul className='list-item'>
                                    {item.name}
                                </ul>
                                <ul>
                                    Price: ${item.price}
                                </ul>
                                <ul>
                                    Estimated Delivery Day: {item.deliveryDate}
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
            <BasketModel/>
        </div>
    )
}
