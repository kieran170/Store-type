import React, { useContext, useEffect, useState} from 'react';

import { Item } from '../types/contextTypes'
import { UserContext } from '../context';
import CheckoutForm from '../components/CheckoutComps/CheckoutForm';
import { Form } from 'semantic-ui-react';


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
                        <div key={item.name}>
                        <p>{item.name}</p>
                        </div>
                    )
            })
            :
            <p>Nothing to buy here</p>}
            <div>
            <p>Your Total is ${userContext?.state.total}</p>
            </div>
            <Form>
                <Form.Field className='form-container'>
                    <label>Discount Code</label>
                    <input placeholder='Enter discount code' />
                </Form.Field>
            </Form>
            <CheckoutForm />
        </div>
    )
}
