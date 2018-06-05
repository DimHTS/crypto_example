/*
  <Button
    loading={loading_true}
    text='Get trade history'
    error={error_true}
    errorText='Error occurred try again!'
    onClick={this.onFunction} />
*/
import React, { Component } from 'react'

import Spinner from '../Spinner'


class Button extends Component {

  render() {
    const { loading, text, error, errorText, onClick } = this.props;

    if (loading) {
      return (
        <div>
          <button disabled>{text}</button>
          &nbsp;
          <Spinner />
        </div>
      )
    }

    if (error) {
      return (
        <div>
          <button onClick={onClick}>{text}</button>
          &nbsp;
          {errorText}
        </div>
      )
    }

    return (
      <div>
        <button onClick={onClick}>{text}</button>
      </div>
    )
  }
}


export default Button;
