/*
  <Select
    label='Currencie: '
    value={this.state.seletedCurrencie}
    onChange={() => this.handleSelectedCurrencie()}
    optionDefault='Select currency'
    options={this.props.currencies} />
*/
import React, { Fragment } from 'react'


const Select = ({ label, value, onChange, optionDefault, options }) => {
  return <Fragment>
    <label>{label} </label>
    <select value={value} onChange={onChange}>
      <option value=''>{optionDefault}</option>
      {
        options.map(item => {
          return <option key={item.name} value={item.name}>{item.name}</option>
        })
      }
    </select>
  </Fragment>
}


export default Select;