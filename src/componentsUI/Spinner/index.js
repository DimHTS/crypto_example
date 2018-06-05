/*
  <Spinner />
*/
import React, { Fragment } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Spinner = () => {
  return <Fragment>
    <FontAwesomeIcon icon="cog" spin />
  </Fragment>
}

export default Spinner;