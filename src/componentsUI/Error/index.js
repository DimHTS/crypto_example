/*
  <Error onClick={this.onGetTiker} />
*/
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { errors } from '../../constants/errors'

const Error = ({ onClick }) => {
  return <Fragment>
    {errors.loadingPage_and_reloadPage} <button onClick={onClick}>Reloading</button>
  </Fragment>
}

Error.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Error;