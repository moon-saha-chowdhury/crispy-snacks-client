import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Orders = () => {
    const [orders, setOrders]=useState([]);
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://nameless-inlet-40123.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data => setOrders(data));
    },[])
    return (
        <div>
            <Header></Header>
            <h3 className="text-light text-center p-3 w-25 bg-success text-wrap mt-3 ml-auto mr-auto">Order Details</h3>
            <h3 className="text-center text-success mb-3">Your Total Order {orders.length}</h3>
            <div className="text-center">
                {
                    orders.map(order => 
                    <h5 className="p-3 mb-3 border w-75 border-success ml-auto mr-auto rounded">
                        Email: {order.email} Product: {order.productName} Price: {order.price} Date: {(new Date(order.orderTime).toLocaleString())} 
                    </h5>)

                }
            </div>
        </div>
    );
};

export default Orders;