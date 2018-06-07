import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { onGetTiker } from '../../actions/tiker'
import { onGetTradeHistory } from '../../actions/tradeHistory'
//Components
import Loading from '../../componentsUI/Loading'
import Error from '../../componentsUI/Error'
import Button from '../../componentsUI/Button'
import Select from '../../componentsUI/Select'
import Table from '../../componentsUI/Table'

import './index.css';
import { errors } from '../../constants/errors'
import findCoins from '../../helpers/TradeHistory/findCoins'



class TradeHistory extends Component {
  constructor() {
    super()

    this.state = {
      seletedCurrencie: 'ETH',
      seletedCoin: 'GNO'
    }
  }

  componentDidMount() {
    this.handleStartContainer();
  }

  handleStartContainer = () => {
    this.props.onGetTiker();
  }


  handleSelectedCurrencie = (e) => {
    this.setState({
      seletedCurrencie: e.target.value,
      seletedCoin: ''
    })
  }

  handleSelectedCoin = (e) => {
    this.setState({ seletedCoin: e.target.value })
  }


  onGetTradeHistory = (e) => {
    e.preventDefault();
    const currencie = this.state.seletedCurrencie;
    const coin = this.state.seletedCoin;
    if ((currencie === '') || (coin === '')) {
      alert(errors.choose_currency_and_coin)
    } else {
      this.props.onGetTradeHistory(currencie, coin)
    }
  }


  render() {
    const {
      loading_Tiker,
      error_Tiker,
      loading_TradeHistory,
      error_TradeHistory,
      tradeHistory
    } = this.props;

    if (loading_Tiker) return <Loading />
    if (error_Tiker) return <Error onClick={() => this.handleStartContainer()} />


    return (
      <div>
        <br />
        <form>
          <Select
            label='Currencie:'
            value={this.state.seletedCurrencie}
            onChange={this.handleSelectedCurrencie}
            optionDefault='Select currency'
            options={this.props.currencies} />

          &emsp;

          <Select
            label='Coin:'
            value={this.state.seletedCoin}
            onChange={this.handleSelectedCoin}
            optionDefault='Select coin'
            options={findCoins(this.props.currencies, this.state.seletedCurrencie)} />

          <br />
          =====================================
          <br />

          <div>
            <Button
              loading={loading_TradeHistory}
              text='Get trade history'
              error={error_TradeHistory}
              errorText={errors.tryAgain}
              onClick={this.onGetTradeHistory} />
          </div>
        </form>

        <br />

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
      </div >
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
