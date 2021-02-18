This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

#### About
Learn how to use React Transition Group library to animate state changes in your React project. Base on [React Animations Tutorial using React Transition Group](https://www.youtube.com/watch?v=BZRyIOrWfHU&t=0s). Big thanks you Ihatetomatoes youtube channel. 

#### Notes
- install ``` react-transition-group ```
- in App.js, wrap Home component with CSSTransition that bring from react-transition-group. Attribute classNames with 's'
``` 
<CSSTransition classNames="fade">
          <Home property={property} />
        </CSSTransition>
 ```
- display ONLY card one at a time by replacing a new card with the update index. 
- in App.css, we have property for a new card fading in and an old card fading out. see '.fade'
- in Home.js, warp Card component with TransitionGroup and CSSTransition. Make sure give key={propery._id} so CSSTransition knows which Card id to be animated.
```
<TransitionGroup className="card-container">
    <CSSTransition
        key={property._id}
        timeout={4500}
        classNames="slide"
    >
        <Card property={property} />
    </CSSTransition>
</TransitionGroup>
```