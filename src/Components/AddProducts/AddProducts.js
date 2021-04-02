import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Admin from '../Admin/Admin';
import { useContext } from 'react';
import { UserContext } from '../../App';


const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);


    const[imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData={
            productName: data.name,
            price: data.price,
            imageURL: imageURL
        }

        const newData ={...loggedInUser, ...eventData}

        const url =`https://nameless-inlet-40123.herokuapp.com/addProducts`
        console.log(newData);
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newData)

        })
        
        .then(res =>console.log('server side response', res))
    };





    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','3a3d4dff30d9da6e9085aedc0add04c7');
        imageData.append('image',event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
              setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
            <Admin></Admin>
            <h3 className="text-center pt-3 pb-3 text-success">Start adding Products</h3>
            <form className="text-center w-75 ml-auto mr-auto border border-success p-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control ml-auto mr-auto  w-25"name="name" defaultValue="Enter Snacks Name" ref={register} />
                <br/>
                <br/>
                <input className="form-control ml-auto mr-auto w-25" name="price" defaultValue="Enter Price" ref={register} />
                <br/>
                <br/>
                <input className="ml-auto mr-auto w-25" name="exampleRequired" type="file" onChange={handleImageUpload}/>
                <br/>
                <br/>
                <input className="bg-success rounded w-25 text-light " type="submit"  defaultValue="Check Out"/>
            </form>
        </div>
    );
};

export default AddProducts;