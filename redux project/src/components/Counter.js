import { connect, useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { Component } from 'react';
import { counterActions } from '../store/counter';

const Counter = () => {
   const dispatch= useDispatch()
  const counter = useSelector(state=>state.counter.counter)
  const show = useSelector(state=>state.counter.showCounter)
  const incrementHandler=()=>{
    // dispatch({type:'increment'})
    dispatch(counterActions.increment())

  };
  const decrementHandler=()=>{
    // dispatch({type:'decrement'})
    dispatch(counterActions.decrement())
  };
  const increaseHandler=()=>{
    // dispatch({type:'increase',amount:5}) 
    dispatch(counterActions.increase(5)) //{type:some_unique_idenetifiers,payload:5}
  }
  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggle())

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&& <div className={classes.value}>{counter}</div>}
     
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+by-5</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// !class based 
// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   };

//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   toggleCounterHandler = () => {
//     // Implement the toggle counter logic here
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler}>+</button>
//           <button onClick={this.decrementHandler}>-</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
