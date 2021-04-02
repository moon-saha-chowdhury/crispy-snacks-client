import React from 'react';
import { useHistory } from 'react-router';

const Products = (props) => {
    const{price, imageURL,_id,productName} = props.snack;
    const history = useHistory();

    const handleDestination = snackId =>{
        const url =`/snack/${snackId}`;
        history.push(url);
    }
    return (
        <div>
             <div className="card h-100 bg-light shadow rounded m-3">
            <img className="bg-light mt-3 w-50 card-img-top card-image ml-auto mr-auto" src={imageURL} alt="snack"/>

                        <div className="card-body  ml-auto mr-auto">
                            <h5 className="card-title text-highlight">{productName}</h5>
                            <h5 className="card-text text-success">Price: ${price} </h5>
                            <button onClick={()=>handleDestination(_id)} className="btn btn-success">Buy Now</button>
                        </div>
                    </div>
        </div>
    );
};

export default Products;