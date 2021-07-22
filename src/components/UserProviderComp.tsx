import React from 'react';
import { UserContextProvider } from '../context';
import App from '../App';

export default function UserProvider() {
    return (
        <UserContextProvider>
            <App />
        </UserContextProvider>
    )
}
