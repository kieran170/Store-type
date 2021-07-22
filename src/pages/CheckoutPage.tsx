import React, { useContext, useEffect, useState} from 'react';


import { Item } from '../types/contextTypes'
import { UserContext } from '../context';
import CheckoutForm from '../components/CheckoutComps/CheckoutForm';

export default function CheckoutPage() {
    const [items, setItems] = useState<[] | Item[]>([])

    const userContext = useContext(UserContext);
    

    useEffect(() => {
        if(userContext){
          setItems(Object.values(userContext?.state.basket));
         
    }
    }, [userContext])


    return (
        <div>
            <h2>Basket</h2>
            {items.length ? items.map((item) => {
                    return (
                        <div>
                        <p>{item.name}</p>
                        </div>
                    )
            })
            :
            <p>Nothing to buy here</p>}
            <p>Your Total is ${userContext?.state.total}</p>
            <CheckoutForm />
        </div>
    )
}
