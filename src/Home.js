import React from 'react';
import logo from './assets/logo.svg';
import Card from './Card';

const Home = ({property}) => {

    return(
        <div className="home">
               
            <div className="card-container">
                <Card property={property} />
            </div>

        </div>   
    )
}

export default Home;