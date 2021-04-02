import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Admin from '../Admin/Admin';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const history =useHistory();
    useEffect(() => {
        fetch('https://nameless-inlet-40123.herokuapp.com/snacks')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const deleteProduct =(id)=>{
        console.log(id);
        fetch("https://nameless-inlet-40123.herokuapp.com/delete/"+ id,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(result =>{
            console.log(result);
        })
    }
    return (
        <div>
            <Admin></Admin>
            <h4 className="text-light text-center p-3 w-25 bg-success text-wrap mt-3 ml-auto mr-auto">Available Products</h4>
            <div className="text-center">
            <table className="table table-bordered w-75 ml-auto mr-auto mb-5">
            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                {
                    products.map(product =>
                           
                            <tbody>
                                <tr>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td><button onClick={()=>deleteProduct(product._id)} className="btn btn-danger text-light">Delete</button></td>
                                </tr>

                            </tbody>
                    )
                }
          </table>

            </div>
        </div>
    );
};

export default ManageProducts;