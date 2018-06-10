/*
  <Button
    loading={loading_true}
    text='Get trade history'
    error={error_true}
    errorText='Error occurred try again!'
    onClick={this.onFunction} />
*/
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Spinner from '../Spinner'


const Button = ({ loading, text, error, errorText, onClick }) => {

  if (loading) {
    return <Fragment>
      <button disabled>{text}</button>
      &nbsp;
      <Spinner />
    </Fragment>
  }

  if (error) {
    return <Fragment>
      <button onClick={onClick}>{text}</button>
      &nbsp;
      {errorText}
    </Fragment>
  }

  return <Fragment>
    <button onClick={onClick}>{text}</button>
  </Fragment>
}


Button.propTypes = {
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
