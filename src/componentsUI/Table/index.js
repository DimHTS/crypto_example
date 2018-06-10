/*
  <Table
    data={tradeHistory}
    counterText='Count of trades:'
    columns={{
      "Header": "keyName_dataProperty",
      "Date": "date",
      "Type": "type"
    }}
  />

  "Header" - is the column header (table=>thead=>tr=>th)
  "keyName_dataProperty" - string-based value accessors! (table=>tbody=>tr=>td)
*/
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


const Table = ({ data, columns, counterText }) => {

  if (!data.length) return null;


  let tableKeys = [];
  Object.keys(columns).map(item => tableKeys.push(columns[item]));

  return <Fragment>
    <table border="1">
      <thead>
        <tr>
          {Object.keys(columns).map((item, num) => <th key={num}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, num) => {
            return <tr key={num}>
              {tableKeys.map((tableKey, num2) => <td key={num2}>{item[tableKey]}</td>)}
            </tr>
          })
        }
      </tbody>
    </table>
    <br />
    {counterText} {data.length}
  </Fragment>
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  counterText: PropTypes.string.isRequired,
  columns: PropTypes.objectOf(PropTypes.any)
}

export default Table;