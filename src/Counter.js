import { Component } from 'react';

class Counter extends Component {
    state = {
        value: 0
    }

    // constructor(){
    //      super();
    //      this.handleClick = this.handleClick.bind(this);   
    // }

    handleClick = () => {
        console.log('Increase clicked');
        this.setState({
            value: this.state.value + 1
        })
    }

    render(){
        return (
            <div>
                <span>{this.state.value}</span>
                <button onClick={this.handleClick}>Increase</button>
            </div>
        )
    }
}

// import { useState } from 'react';

// const Counter = () => {
//     const [value, setValue] = useState(0);

//     const handleClick = () => {
//         setValue(value + 1);
//     }

//     return (
//         <div>
//             <span>{value}</span>
//             <button onClick={handleClick}>Increase</button>
//         </div>
//     )
// };

export default Counter;