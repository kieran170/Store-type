import React, { useContext } from 'react';

import { UserContext } from '../context';

export default function AccountPage() {

    const userContext = useContext(UserContext);
    return (
        <div>
            <pre>{JSON.stringify(userContext?.state, null, 2)}</pre>
            <p>Hello from the account page</p>
        </div>
    )
}
