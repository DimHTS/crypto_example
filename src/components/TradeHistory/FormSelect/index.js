import React, { Component } from 'react'

//Components
import Button from '../../../componentsUI/Button'
import Select from '../../../componentsUI/Select'

// import './index.css';
import { errors } from '../../../constants/errors'
import findCoins from '../../../helpers/TradeHistory/findCoins'


class FormSelect extends Component {
  constructor() {
    super()

    this.state = {
      seletedCurrencie: 'ETH',
      seletedCoin: 'GNO'
    }
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
      currencies,
      loading_TradeHistory,
      error_TradeHistory
    } = this.props;

    const {
      seletedCurrencie,
      seletedCoin
    } = this.state;


    return (
      <form>
        <Select
          label='Currencie:'
          value={seletedCurrencie}
          onChange={this.handleSelectedCurrencie}
          optionDefault='Select currency'
          options={currencies} />

        &emsp;

        <Select
          label='Coin:'
          value={seletedCoin}
          onChange={this.handleSelectedCoin}
          optionDefault='Select coin'
          options={findCoins(currencies, seletedCurrencie)} />

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
    )
  }
}

export default FormSelect;
