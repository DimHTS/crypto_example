/*
  <Error onClick={this.onGetTiker} />
*/
import React, { Fragment } from 'react'

import { errors } from '../../constants/errors'

const Error = ({ onClick }) => {
  return <Fragment>
    {errors.loadingPage_and_reloadPage} <button onClick={onClick}>Reloading</button>
  </Fragment>
}


export default Error;