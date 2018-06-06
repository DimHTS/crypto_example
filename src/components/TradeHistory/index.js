import React, { Component } from 'react'

//Components
import Button from '../../componentsUI/Button'
import { errors } from '../../constants/errors'

// import './index.css';


class TradeHistory extends Component {

  onGetTradeHistory = () => {
    const currencie = this.props.seletedCurrencie;
    const coin = this.props.seletedCoin;
    if ((currencie === '') || (coin === '')) {
      alert(errors.choose_currency_and_coin)
    } else {
      this.props.onGetTradeHistory(currencie, coin)
    }
  }

  render() {
    const { loading_TradeHistory, error_TradeHistory, tradeHistory } = this.props;
    return (
      <div>
        <Button
          loading={loading_TradeHistory}
          text='Get trade history'
          error={error_TradeHistory}
          errorText='Error occurred try again!'
          onClick={this.onGetTradeHistory} />

        <br />

        {tradeHistory.length ?
          <div>
            <table border="1">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Rate</th>
                  <th>Amount</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {
                  tradeHistory.map((item, num) => {
                    return <tr key={num}>
                      <td>{item.date}</td>
                      <td>{item.type}</td>
                      <td>{item.rate}</td>
                      <td>{item.amount}</td>
                      <td>{item.total}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
            <br />
            Count of trades: {tradeHistory.length}
          </div>
          :
          null
        }
      </div>
    )
  }
}


export default TradeHistory;
