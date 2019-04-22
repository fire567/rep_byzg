import React, { Component } from 'react';

export default class InputCheck extends Component {
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" /> {this.props.label}
        </label>
      </div>
    );
  }
}
