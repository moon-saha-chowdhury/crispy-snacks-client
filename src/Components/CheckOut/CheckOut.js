import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const CheckOut = () => {

    const { snackId } = useParams();
    const [snacks, setSnacks] = useState({});
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://nameless-inlet-40123.herokuapp.com/snacks/' + snackId)
            .then(res => res.json())
            .then(data => setSnacks(data))
    }, [])

    const ordersSubmit=()=>{
        const orderData={
            productName: snacks.productName,
            price: snacks.price,
            orderTime: new Date()
        }

        const newOrder ={...loggedInUser,...orderData}
        const url =`https://nameless-inlet-40123.herokuapp.com/addOrders`
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newOrder)

        })
        .then(res =>console.log('server side response', res))

    }
    return (
        <div>
            <Header></Header>
            <h1 className="text-center pt-5">Checkout</h1>
            <table className="table w-75 ml-auto mr-auto mb-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{snacks.productName}</td>
                        <td>1</td>
                        <td>{snacks.price}</td>
                    </tr>

                </tbody>
            </table>
            <div class="d-grid  d-md-flex justify-content-md-end">
                <button onClick={ordersSubmit} class="btn btn-success ml-auto mr-auto " type="button">Check Out</button>
            </div>


        </div>
    );
};

export default CheckOut;