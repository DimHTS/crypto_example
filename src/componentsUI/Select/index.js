/*
  <Select
    label='Currencie:'
    value={this.state.seletedCurrencie}
    onChange={() => this.handleSelectedCurrencie()}
    optionDefault='Select currency'
    options={this.props.currencies} />
*/
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


const Select = ({ label, value, onChange, optionDefault, options }) => {
  return <Fragment>
    <label>{label} </label>
    <select value={value} onChange={onChange}>
      <option value=''>{optionDefault}</option>
      {
        options.map(item => <option key={item.name} value={item.name}>{item.name}</option>)
      }
    </select>
  </Fragment>
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  optionDefault: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

export default Select;