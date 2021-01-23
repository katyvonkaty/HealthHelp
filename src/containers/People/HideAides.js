import React from "react";

export default class HideAides extends React.Component {
  state = {
    textDisplay: false,
  };

  ToggleButton() {
    this.setState((currentState) => ({
      textDisplay: !currentState.textDisplay,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.ToggleButton()}>Toggle</button>
        {!this.state.textDisplay && this.props.text}
      </div>
    );
  }
}
