import React, { useContext } from 'react';

import { UserContext } from '../context';
import Men from '../components/HomepageComps/Men';
import Strap from '../components/Strap'

export default function Homepage() {

    const userContext = useContext(UserContext);
    return (
        <div>
            <Strap />
            {userContext?.state.selectedPage === null ? <p>Hi</p> : userContext?.state.selectedPage === 'Men' ? <Men items={'men\'s clothing'}/> : userContext?.state.selectedPage === 'Electronics' ? <Men items={'electronics'} /> : <Men items={'women\'s clothing'}/>}
        </div>
    )
}
