import React from 'react';

const cartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: (id) => {},
    clearCart: () => {}
});

export default cartContext;