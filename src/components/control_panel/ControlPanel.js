import React from "react";
import "./ControlPanel.css"


class ControlPanel extends React.Component {

    state = {
        alert : false
    };

    handleSubmit = async () => {
        await this.props.updateMarkers(this.state.dateAndTime);
    };

    handleChange = (e) => {
        const dateAndTime = e.target.value
        this.setState({dateAndTime})
    };

    render() {
    return (
        <div className={"track_buttons"}>
            <button type = "button" className={"button"}>
                Start Tracking
            </button>

            <button type="button">
                Stop Tracking
            </button>
        </div>

    );
  }
}

export default ControlPanel;
