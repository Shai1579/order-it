import classes from "./Orders.module.css";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import OrdersModel from "../../model/OrdersModel";
import userContext from "../../store/user-context";
import OrderSummery from './OrderSummery';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const userCtx = useContext(userContext);

    const getOrders = useCallback(async () => {
        const ordersResponse = await OrdersModel.getOrdersByUserId(userCtx.id);
        const responseJson = await ordersResponse.json();
        const currentOrders = [];
        Object.keys(responseJson).forEach(orderId => {
            currentOrders.push(responseJson[orderId].orderedItems);
        });
        setOrders(currentOrders);
    }, [userCtx.id]);
    useEffect(() => {
        getOrders()
    },[getOrders])

    let ordersContent = [];
    for (let i = 0; i < orders.length; i++) {
        let ordersSummeryClasses = '';
        if (i === 0) {
            ordersSummeryClasses += classes['first-summery'];
        }
        ordersContent.push(<OrderSummery key={i} addedClasses={ordersSummeryClasses} orderedItems={orders[i]}></OrderSummery>);
    }
    return <Fragment>
        {ordersContent}
    </Fragment>
}

export default Orders;