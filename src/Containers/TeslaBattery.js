import React from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../Components/TeslaNotice/TeslaNotice';
import TeslaCar from '../Components/TeslaCar/TeslaCar';

class TeslaBattery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            carstarts: [],
            config: {
                speed: 55,
                temperature: 28,
                climate: true,
                wheels: 19
            }
        }
    }
    render() {
        const { config } = this.state;
        return (
            <form className="tesla-battery">
                <h1>Range Per Charge</h1>
                <TeslaCar wheelsize={config.wheels} />
                <TeslaNotice />
            </form>
        );
    }
}


export default TeslaBattery;
