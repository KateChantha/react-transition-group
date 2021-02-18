import React from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from './Card';

const Home = ({property}) => {

    return(
        <div className="page">
               
               <TransitionGroup className="card-container">
                <CSSTransition
                    key={property._id}
                    timeout={4500}
                    classNames="slide"
                >
                    <Card property={property} />
                </CSSTransition>
            </TransitionGroup>

        </div>   
    )
}

export default Home;