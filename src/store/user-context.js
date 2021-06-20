import React from 'react';

const userContext = React.createContext({
    id: null,
    name: null,
    email: null,
    photoUrl: null,
    token: null,
    isLoggedIn: false,
    setUser: () => {},
    clearUser: () => {}
});

export default userContext;