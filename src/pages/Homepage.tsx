import React, { useContext } from 'react';

import { UserContext } from '../context';
import Men from '../components/HomepageComps/Men';
import Strap from '../components/Strap'

export default function Homepage() {

    const MenItems = [
        {
            name: 'T-shirt',
            price: 10.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Shirt',
            price: 50.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Shorts',
            price: 5.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Jeans',
            price: 45.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Socks',
            price: 2.50,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Shoes',
            price: 19.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Jumper',
            price: 15.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Trainers',
            price: 35.00,
            deliveryDate: 'Tomorrow'
        },
    ]

    const WomenItems = [
        {
            name: 'T-shirt-Women',
            price: 10.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Shirt-Women',
            price: 50.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Shorts-Women',
            price: 5.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Jeans-Women',
            price: 45.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Socks-Women',
            price: 2.50,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Shoes-Women',
            price: 19.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Jumper-Women',
            price: 15.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Trainers-Women',
            price: 35.00,
            deliveryDate: 'Tomorrow'
        },
    ]

    const ChildrenItems = [
        {
            name: 'T-shirt-Kids',
            price: 10.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Shirt-Kids',
            price: 50.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Shorts-Kids',
            price: 5.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Jeans-Kids',
            price: 45.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Socks-Kids',
            price: 2.50,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Shoes-Kids',
            price: 19.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Jumper-Kids',
            price: 15.00,
            deliveryDate: 'Tomorrow'
        },
        {
            name: 'Trainers-Kids',
            price: 35.00,
            deliveryDate: 'Tomorrow'
        },
    ]

    const userContext = useContext(UserContext);
    return (
        <div>
            <Strap />
            {userContext?.state.selectedPage === null ? <p>Hi</p> : userContext?.state.selectedPage === 'Men' ? <Men items={MenItems}/> : userContext?.state.selectedPage === 'Children' ? <Men items={ChildrenItems} /> : <Men items={WomenItems}/>}
        </div>
    )
}
