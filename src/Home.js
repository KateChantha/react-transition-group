import React from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from './Card';

const Home = ({property}) => {

    return(
        <div className="page">
               
               <TransitionGroup className="card-container">
                <CSSTransition
                    key={property._id}
                    // calculation timeout to have crossface transition
                    timeout={4500}
                    // animate option either 'fade' or 'slide'
                    // classNames="fade"
                    classNames="slide"
                >
                    <Card property={property} />
                </CSSTransition>
            </TransitionGroup>

        </div>   
    )
}

export default Home;