import React from 'react';
import Button from '../students/UI/Button/button';

class Counter extends React.Component{
    render(){
        const {value, onIncrement, onDecrement} = this.props

        return(
            <div>
                <h2>Count : {value}</h2>
                <Button clicked={onIncrement} >Increment</Button>
                <Button clicked={onDecrement} >Decrement</Button>
            </div>
        )
    }

}

export default Counter;

// import React from 'react';
// import Button from '../students/UI/Button/button';
// import './counter.css';

// class Counter extends React.Component{
//     constructor(props){
//         super();
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
//         this.state = {
//             count : 0
//         }
//     }
//     increment() {
//         this.setState((prevState) => {
//             return{
//                 count : prevState.count + 1
//             }
        
//         })
//     }
//     decrement() {
//         this.setState((prevState)=>{
//             return{
//                 count : prevState.count - 1
//             }
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Counter : {this.state.count}</h2>
//                 <Button clicked={this.increment}>Increment</Button>
//                 <Button clicked={this.decrement} >Decrement</Button>
//             </div>
            
//         )
//     }
// }

// export default Counter;