import React from "react";

class Button extends React.Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Manzanas: {count}</h1>
        <button onClick={this.handleClick} type="button">
          Agregar
        </button>
      </div>
    );
  }
}

/* const Button = (props) => {
  const { text2, text3 } = props;
  return (
    <div>
      <button type="button">{text}</button>
    </div>
  );
}; */

export default Button;
