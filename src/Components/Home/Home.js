import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Spinner from '../../images/giphy.gif';

const Home = () => {
    const[snacks, setSnacks] = useState([]);
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://nameless-inlet-40123.herokuapp.com/snacks')
        .then(res => res.json())
        .then(data => {
            setSnacks(data)
            setLoading(false)
        })
    },[])
    return (
        <div>
        <Header></Header>
        <h3 className="text-center pt-3 text-success">Choose Your Favourite Snack</h3> 
        <div className="row row-cols-1 row-cols-md-3 g-4 card-container m-3 ">
            {
                loading ? <img className="ml-auto mr-auto" src={Spinner}/>  :
                snacks.map(snack =><div className="col bg-success"><Products snack={snack}></Products></div>)
            }

        </div>
        </div>
    );
};

export default Home;