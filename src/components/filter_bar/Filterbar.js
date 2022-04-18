import React from "react";
import "./Filterbar.css"
import moment from 'moment'


class Filterbar extends React.Component {

    state = {
        dateAndTime : moment().toDate(),
    }

    handleSubmit = async () => {
        await this.props.updateMarkers(this.state.dateAndTime);
    };

    handleChange = (e) => {
        const dateAndTime = e.target.value
        this.setState({dateAndTime})
    }

    render() {
    return (
      <div>
        <div className={"datepicker"}>
          {/*<label for="time"></label>*/}
          {/*<input type="datetime-local" id="time" onChange={this.handleChange} value="2018-06-12T19:30"/>*/}
          <button onClick={this.handleSubmit}>Refresh</button>
        </div>
      </div>
    );
}
}

export default Filterbar;
