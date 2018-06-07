/*
  <Table
    data={tradeHistory}
    counterText='Count of trades:'
    columns={[
      { "Date": "date" },
      { "Type": "type" },
      { "Rate": "rate" },
      { "Amount": "amount" },
      { "Total": "total" }
    ]}
  />

  "Date" - is the column header (table=>thead=>tr=>th)
  "date" - is the data key (table=>tbody=>tr=>td)
*/
import React, { Fragment } from 'react'


const Table = ({ data, columns, counterText }) => {

  if (!data.length) return null;


  let tableKeys = [];
  columns.map(item => tableKeys.push(item[Object.keys(item)])); // create tableKeys

  return <Fragment>
    <table border="1">
      <thead>
        <tr>
          {columns.map((item, num) => <th key={num}>{Object.keys(item)}</th>)}
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


export default Table;