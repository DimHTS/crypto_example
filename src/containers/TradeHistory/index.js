import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { onGetTiker } from '../../actions/tiker'
import { onGetTradeHistory } from '../../actions/tradeHistory'
//Components
import Loading from '../../componentsUI/Loading'
import Error from '../../componentsUI/Error'
import Button from '../../componentsUI/Button'

import './index.css';
import { errors } from '../../constants/errors'


class TradeHistory extends Component {
  constructor() {
    super()

    this.state = {
      seletedCurrencie: '',
      seletedCoin: ''
    }
  }

  componentDidMount() {
    this.handleStartContainer();
  }

  handleStartContainer = () => {
    this.props.onGetTiker();
  }


  handleSelectedCurrencie = (e) => {
    const currencie = e.currentTarget.value;
    this.setState({ seletedCurrencie: currencie })
  }

  handleSelectedCoin = (e) => {
    const coin = e.currentTarget.value;
    this.setState({ seletedCoin: coin })
  }


  onGetTradeHistory = () => {
    const currencie = this.state.seletedCurrencie;
    const coin = this.state.seletedCoin;
    if ((currencie === '') || (coin === '')) {
      alert(errors.choose_currency_and_coin)
    } else {
      this.props.onGetTradeHistory(currencie, coin)
    }
  }

  render() {
    const { loading_TradeHistory, error_TradeHistory, tradeHistory } = this.props;

    if (this.props.loading_Tiker) return <Loading />
    if (this.props.error_Tiker) return <Error onClick={() => this.handleStartContainer()} />

    return (
      <div>
        <br />
        <div>
          <label>Currencie: </label>
          <select onChange={this.handleSelectedCurrencie}>
            <option value=''>Select currency</option>
            {
              this.props.currencies.map((item, num) => {
                return <option key={num} value={item.name}>{item.name}</option>
              })
            }
          </select>

          &emsp;

          <label>Coin: </label>
          <select onChange={this.handleSelectedCoin}>
            <option value=''>Select coin</option>
            {
              this.props.currencies.filter(item =>
                String(item.name) === String(this.state.seletedCurrencie)
              ).map(currencie => {
                return currencie.coins.map(coin => {
                  return <option key={coin} value={coin}>{coin}</option>
                })
              })
            }
          </select>
        </div>



        <br />
        =====================================
        <br /> <br />



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

        <br />
      </div>
    )
  }
}


TradeHistory.propTypes = {
  loading_Tiker: PropTypes.bool.isRequired,
  error_Tiker: PropTypes.bool.isRequired,
  currencies: PropTypes.array,

  loading_TradeHistory: PropTypes.bool.isRequired,
  error_TradeHistory: PropTypes.bool.isRequired,
  tradeHistory: PropTypes.array,
}


const mapStateToProps = (state) => ({
  loading_Tiker: state.tiker.loading,
  error_Tiker: state.tiker.error,
  currencies: state.tiker.currencies,

  loading_TradeHistory: state.tradeHistory.loading,
  error_TradeHistory: state.tradeHistory.error,
  tradeHistory: state.tradeHistory.data,
})

const mapDispatchToProps = ({
  onGetTradeHistory,
  onGetTiker
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeHistory);
