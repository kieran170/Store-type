import React, { useContext, useState, useEffect } from 'react';
import { Button, Input} from 'semantic-ui-react';


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
    const [newItems, setItems] = useState<[] | Product[]>([]);
    const [disabledBtn, setDisabled] = useState([-1]);
    const [filteredItems, setFilteredItems] = useState<[] | Product[]>([])
    const [value, setValue] = useState('')

    const addToBasket = (e: React.MouseEvent, item: Product, index:number ) => {
        userContext?.dispatch({
            type: 'ADD_TO_BASKET',
            payload: {price: item.price, name: item.title},
            key: Object.keys(userContext.state.basket).length
        })
        userContext?.dispatch({
            type: 'ADD_TO_TOTAL',
            number: item.price,
        })
        setDisabled([item.id, ...disabledBtn])
    }

    useEffect(() => {
        api.getProducts(items).then((data) => {
            setItems(data)
        })
    }, [items])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        if (e.target.value.length > 0) {
            const filtered: Product[] = []
            newItems.forEach((item) => {
                if (item.title.startsWith(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))){
                    filtered.push(item)
                }
            })
            setFilteredItems(filtered)
        }
        else {
            setFilteredItems([])
        }   
    }

    const handleReset = () => {
        setFilteredItems([])
        setValue('')
    }
    

    return (
        <div className='page-container'>
            <div className='button-container'>
                <BasketModel/>
                <Input value={value} focus placeholder='Search' onChange={handleSearch} onBlur={handleReset}/>
            </div>
            <div className='items-container'>
                {filteredItems.length === 0 && value === '' ? newItems.map((item, index) => {
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
                                    <div className='add-to-basket-container'>
                                        <Button disabled={disabledBtn.includes(item.id) && true} onClick={(e) => addToBasket(e, item, index)} animated='fade'>
                                            <Button.Content visible>Add To Basket</Button.Content>
                                            <Button.Content hidden>{`$${item.price}`}</Button.Content>
                                        </Button>
                                    </div>
                                </ul>
                            </li>     
                        </div>
                    )
                })
                :
                filteredItems.length === 0 && value !== '' ?
                <div style={{textAlign: 'center', paddingTop: '50px'}}>
                    <h3>No results Found, Please refine your search</h3>
                </div>
                :
                filteredItems.map((item, index) => {
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
                                    <div className='add-to-basket-container'>
                                        <Button disabled={disabledBtn.includes(item.id) && true} onClick={(e) => addToBasket(e, item, index)} animated='fade'>
                                            <Button.Content visible>Add To Basket</Button.Content>
                                            <Button.Content hidden>{`$${item.price}`}</Button.Content>
                                        </Button>
                                    </div>
                                </ul>
                            </li>     
                        </div>
                    )
                })
                }
            </div>       
        </div>
    )
}
