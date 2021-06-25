const OrdersModel = {
    getOrdersByUserId(id) {
        return fetch(
          `https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/orders.json?orderBy="user_id"&startAt="${id}"&endAt="${id}"`
        );
      },
}

export default OrdersModel;