import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import TeslaBattery from './Containers/TeslaBattery';

// const App = () => {
//     return (
//         <div cla>
//             <h1>Tesla Battery Range Calculator</h1>
//         </div>
//     )
// }

class App extends Component {
    render() {
        return (
            <div className="App"> 
                <Header />
                <TeslaBattery />
            </div>
        )
    }
}

export default App
