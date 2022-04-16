import React from "react";
import "./ControlPanel.css"
import controlDevice from "../api/deviceControlAPI";



class ControlPanel extends React.Component {

    state = {
        GPS : "off"
    };

    handleGPSOn = async () => {
        await this.setState({GPS: "on"});
        const status = await controlDevice(this.state.GPS);
    };

    handleGPSOff = async () => {
        await this.setState({GPS: "off"});
        const status = await controlDevice(this.state.GPS);
    };


    render() {
    return (
        <div className={"track_buttons"}>
            <button type = "button" className={"button"} onClick={this.handleGPSOn}>
                Start Tracking
            </button>

            <button type="button" onClick={this.handleGPSOff}>
                Stop Tracking
            </button>
            <label>{this.state.GPS}</label>
        </div>

    );
  }
}

export default ControlPanel;
