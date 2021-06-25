import React from 'react';

const userContext = React.createContext({
    id: null,
    name: null,
    email: null,
    photoUrl: null,
    token: null,
    street: null,
    city: null,
    postal: null,
    isLoggedIn: false,
    setUser: () => {},
    clearUser: () => {},
    updateUser: () => {}
});

export default userContext;