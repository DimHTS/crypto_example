import React, { Component } from 'react'

// import './index.css';


class TikerSelection extends Component {

  render() {
    return (
      <div>
        <label>Currencie: </label>
        <select onChange={(e) => this.props.handleSelectedCurrencie(e.target.value)}>
          <option value=''>Select currency</option>
          {
            this.props.currencies.map((item, num) => {
              return <option key={num} value={item.name}>{item.name}</option>
            })
          }
        </select>

        &emsp;

        <label>Coin: </label>
        <select onChange={e => this.props.handleSelectedCoin(e.target.value)}>
          <option value=''>Select coin</option>
          {
            this.props.currencies.filter(item =>
              String(item.name) === String(this.props.seletedCurrencie)
            ).map(currencie => {
              return currencie.coins.map(coin => {
                return <option key={coin} value={coin}>{coin}</option>
              })
            })
          }
        </select>
      </div>
    )
  }
}


export default TikerSelection;
